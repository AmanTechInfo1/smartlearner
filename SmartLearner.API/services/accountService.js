const User = require("../models/userModel");
const roleServices = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");
const emailServices = require("../services/emailService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const crypto = require("crypto");
const PasswordHash = require("../utilities/PasswordHash");

class AccountService {
  async registerUserAsync(userData) {
    try {
      const { username, email, password, phoneNumber } = userData;

      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("Email already exists");
      }

      // Hash the password
      const passwordHash = new PasswordHash(8, true);
      const hashedPassword = passwordHash.HashPassword(password);

      // Create the user
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
        phoneNumber,
      });

      return user;
    } catch (err) {
      // Throw an error if registration fails
      throw new Error(err.message);
    }
  }

  async loginUserAsync(credentials) {
    try {
      const passwordHash = new PasswordHash(8, true);
      const { email, password } = credentials;

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Invalid Email");
      }
      const isPasswordValid = passwordHash.CheckPassword(
        password,
        user.password
      );
      if (!isPasswordValid) {
        throw new Error("Invalid email or password");
      }

      // Fetch userRole
      const userRole = await userRoleServices.getUserRoleAsync(user._id);

      if (!userRole) {
        throw new Error("Invalid user");
      }

      // Fetch user's Role
      const role = await roleServices.getRoleByIdAsync(userRole.roleId);

      if (!role) {
        throw new Error("Invalid user");
      }

      // Generate JWT token with expiry
      const token = jwt.sign(
        { userId: user._id, email: user.email, role: role.name },
        process.env.JWT_SECRET || "My name is Akash",
        { expiresIn: "1h" } // Token expiry time
      );

      // Return user info with JWT token and role
      return {
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: role.name,
        },
        token,
        expiresIn: 3600, // Expiry in seconds (1 hour)
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async changePasswordAsync(userId, newPassword) {
    try {
      const passwordHash = new PasswordHash(8, true);
      // Hash the new password
      const hashedPassword = passwordHash.HashPassword(newPassword);

      // Update user's password
      await User.findByIdAndUpdate(userId, { password: hashedPassword });

      return { message: "Password changed successfully." };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async forgotPasswordAsync(email) {
    try {
      // Generate a random password
      const newPassword = Math.random().toString(36).slice(-8);

      const passwordHash = new PasswordHash(8, true);
      // Hash the new password
      const hashedPassword = passwordHash.HashPassword(newPassword);

      // Update user's password in the database
      await User.findOneAndUpdate({ email }, { password: hashedPassword });

      // Send email with the new password
      await emailServices.sendEmail(
        email,
        "Password Reset",
        `Your new password is: ${newPassword}`
      );

      return { message: "New password sent to your email." };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async resetPasswordAsync(email, token, newPassword) {
    try {
      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "My name is Akash"
      );

      // Hash the new password
      const passwordHash = new PasswordHash(8, true);
      // Hash the new password
      const hashedPassword = passwordHash.HashPassword(newPassword);
      
      // Update user's password in the database
      await User.findOneAndUpdate({ email }, { password: hashedPassword });

      return { message: "Password reset successfully." };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async verifyEmailAsync(email) {
    try {
      // Send verification email
      await emailServices.sendEmail(
        email,
        "Email Verification",
        "Please click on the link to verify your email."
      );

      return { message: "Verification email sent. Please check your email." };
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = new AccountService();
