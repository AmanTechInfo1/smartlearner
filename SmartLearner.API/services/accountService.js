const User = require("../models/userModel");
const UserRole = require("../models/userRoleModel");
const roleServices = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PasswordHash = require("../utilities/PasswordHash");
const roleService = require("../services/roleService");
const { ROLES } = require("../utilities/constatnt");

class AccountService {
  async registerUserAsync(userData) {
    try {
      const { username, email, password, phoneNumber, privacyPolicy } =
        userData;

      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("Email already exists");
      }

      // Hash the password
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create the user
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
        phoneNumber,
        privacyPolicy,
        isBcryptHashed: true,
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

      if (user.isBcryptHashed) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid Password");
        }
      } else {
        const isPasswordValid = passwordHash.CheckPassword(
          password,
          user.password
        );
        if (!isPasswordValid) {
          throw new Error("Invalid Password");
        }
        // If password is valid, update password hash to bcrypt
        const salt = await bcrypt.genSalt();
        const newBcryptHash = await bcrypt.hash(password, salt);
        user.password = newBcryptHash;
        user.isBcryptHashed = true;
        await user.save();
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
      const jwtAge = 2 * 60 * 60;
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET || "SMARTLEARNERJWT",
        { expiresIn: jwtAge }
      );

      // Return user info with JWT token and role
      return {
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: role.name,
          token,
          expiresIn: jwtAge * 1000,
        },
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // async changePasswordAsync(userId, newPassword) {
  //   try {
  //     const passwordHash = new PasswordHash(8, true);
  //     // Hash the new password
  //     const hashedPassword = passwordHash.HashPassword(newPassword);

  //     // Update user's password
  //     await User.findByIdAndUpdate(userId, { password: hashedPassword });

  //     return { message: "Password changed successfully." };
  //   } catch (err) {
  //     throw new Error(err.message);
  //   }
  // }

  // async forgotPasswordAsync(email) {
  //   try {
  //     // Generate a random password
  //     const newPassword = Math.random().toString(36).slice(-8);

  //     const passwordHash = new PasswordHash(8, true);
  //     // Hash the new password
  //     const hashedPassword = passwordHash.HashPassword(newPassword);

  //     // Update user's password in the database
  //     await User.findOneAndUpdate({ email }, { password: hashedPassword });

  //     // Send email with the new password
  //     await emailServices.sendEmail(
  //       email,
  //       "Password Reset",
  //       `Your new password is: ${newPassword}`
  //     );

  //     return { message: "New password sent to your email." };
  //   } catch (err) {
  //     throw new Error(err.message);
  //   }
  // }

  // async resetPasswordAsync(email, token, newPassword) {
  //   try {
  //     // Verify token
  //     const decoded = jwt.verify(
  //       token,
  //       process.env.JWT_SECRET || "My name is Akash"
  //     );

  //     // Hash the new password
  //     const passwordHash = new PasswordHash(8, true);
  //     // Hash the new password
  //     const hashedPassword = passwordHash.HashPassword(newPassword);

  //     // Update user's password in the database
  //     await User.findOneAndUpdate({ email }, { password: hashedPassword });

  //     return { message: "Password reset successfully." };
  //   } catch (err) {
  //     throw new Error(err.message);
  //   }
  // }

  // async verifyEmailAsync(email) {
  //   try {
  //     // Send verification email
  //     await emailServices.sendEmail(
  //       email,
  //       "Email Verification",
  //       "Please click on the link to verify your email."
  //     );

  //     return { message: "Verification email sent. Please check your email." };
  //   } catch (err) {
  //     throw new Error(err.message);
  //   }
  // }

  async getAllUsersAsync(pageNumber, pagesize, query) {
    try {
      const skip = (pageNumber - 1) * (pagesize || 20);
      let filter = { isDeleted: false };

      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ email: regex }, { username: regex }];
      }
      const role = await roleService.getRoleByNameAsync(ROLES.ADMIN);

      filter._id = {
        $nin: await UserRole.find({ roleId: role._id }).distinct("userId"),
      };

      // Retrieve the total count of users matching the filter
      const totalCount = await User.countDocuments(filter);

      const users = await User.find(filter)
        .skip(skip)
        .limit(pagesize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 201,
        success: true,
        data: { users, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = new AccountService();
