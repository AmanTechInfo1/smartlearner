const User = require("../models/userModel");
const UserRole = require("../models/userRoleModel");
const roleServices = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const PasswordHash = require("../utilities/PasswordHash");
const roleService = require("../services/roleService");
const { ROLES } = require("../utilities/constatnt");
const Role = require("../models/roleModel");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { sendWelcomeEmail, sendAdminNotification } = require('../services/emailService');

class AccountService {
  async registerUserAsync(userData) {
    try {
      const { username, email, password, phoneNumber } = userData;

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
        // privacyPolicy,
        isBcryptHashed: true,
      });

      await sendWelcomeEmail(user);  // Send thank-you email to the user
      await sendAdminNotification(user); 

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

      
      const role = await roleServices.getRoleByIdAsync(userRole.roleId);

      if (!role.success) {
        throw new Error("Invalid user");
      }

      
      const jwtAge = 1000000; 
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET || "SMARTLEARNERJWT",
        { expiresIn: jwtAge }
      );

    
      return {
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          role: role.data.name,
          token,
          expiresIn: jwtAge * 1000 , // Send expiry time in milliseconds
        },
      };
    } catch (err) {
      throw new Error(err.message);
    }
  }

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

  async getOneUsersAsync(params_id) {
    try {
      let aagr = [
        {
          $addFields: {
            uniqueId: {
              $toString: "$_id",
            },
          },
        },
        {
          $match: {
            uniqueId: params_id,
          },
        },
        {
          $lookup: {
            from: "userroles",
            localField: "_id",
            foreignField: "userId",
            pipeline: [
              {
                $lookup: {
                  from: "roles",
                  localField: "roleId",
                  foreignField: "_id",
                  as: "result",
                },
              },
              {
                $unwind: {
                  path: "$result",
                  preserveNullAndEmptyArrays: true,
                },
              },
              {
                $addFields: {
                  result: "$result.name",
                },
              },
            ],
            as: "result",
          },
        },
        {
          $unwind: {
            path: "$result",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "planusers",
            localField: "_id",
            foreignField: "userId",
            pipeline: [
              {
                $sort: {
                  _id: -1,
                },
              },
              {
                $limit: 1,
              },
              {
                $match: {
                  planEndDate: {
                    $gte: new Date(),
                  },
                },
              },
            ],
            as: "planresult",
          },
        },
        {
          $unwind: {
            path: "$planresult",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            roleId: {
              $toString: "$result.roleId",
            },
            roleName: {
              $toString: "$result.result",
            },
          },
        },
      ];
      const users = await User.aggregate(aagr);

      const totalCount = await User.countDocuments({ _id: params_id });
      const resultObject = {
        message: "Fetched successfully",
        statusCode: 200,
        success: true,
        data: users[0],
      };

      return resultObject;
    } catch (err) {
      throw new Error(err.message);
    }
  }




  async getAllUsersRolesAsync() {
    try {
      const role = await Role.aggregate([
        {
          $addFields: {
            uniqueId: "$_id",
          },
        },
      ]);
      const resultObject = {
        message: "Fetched successfully",
        statusCode: 201,
        success: true,
        data: { role },
      };

      return resultObject;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async updateUserAsync(roleId, roleData) {
    try {
      // Step 1: Update the user with new data
      const updatedUser = await User.findByIdAndUpdate(roleId, roleData, {
        new: true,  // Return the updated user
      });
  
      if (!updatedUser) {
        throw new Error("User not found.");
      }
  
      // Step 2: Update or create the user role in the UserRole collection
      let userRole = await UserRole.findOneAndUpdate(
        { userId: roleId },  // Find UserRole by userId
        { roleId: roleData.roleId }, // Update the roleId
        { new: true } // Return the updated userRole
      );
  
      if (!userRole) {
        // If no existing UserRole document was found, create a new one
        userRole = new UserRole({
          userId: roleId,
          roleId: roleData.roleId,
        });
        await userRole.save(); // Save the new UserRole document
      }
  
      // Step 3: Return the updated data (user and userRole)
      const resultObject = {
        message: "Updated successfully",
        statusCode: 201,
        success: true,
        data: { updatedUser, userRole },
      };
  
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }
  

  async deleteUserAsync(roleId) {
    try {
      await User.findByIdAndDelete(roleId);
      const resultObject = {
        message: "Deleted successfully",
        statusCode: 201,
        success: true,
        data: null,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async forgotPasswordAsync(email) {
    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Email not found");
      }

      // Generate a reset password token
      const resetToken = crypto.randomBytes(20).toString("hex");
      const resetTokenExpiration = Date.now() + 3600000; // 1 hour expiry

      // Store the reset token and its expiration time in the database
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = resetTokenExpiration;
      await user.save();

      // Send reset email
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "amanchandel2620@gmail.com",
          pass: "noey ovjq zsyb waut",
        },
      });

      const mailOptions = {
        from: "admin@smartlearner.com",
        to: email,
        subject: "Password Reset Request",
        text: `To reset your password, please click on the following link:
       http://localhost:3000/reset-password/${resetToken}`,
      };

      await transporter.sendMail(mailOptions);

      return { success: true, message: "Reset link sent to your email" };
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async resetPasswordAsync(resetToken, newPassword) {
    try {
      // Find the user based on the reset token
      const user = await User.findOne({
        resetPasswordToken: resetToken,
        resetPasswordExpires: { $gt: Date.now() }, // Token must not be expired
      });

      if (!user) {
        throw new Error("Invalid or expired reset token");
      }

      // Hash the new password
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      // Update user's password and clear reset token fields
      user.password = hashedPassword;
      user.resetPasswordToken = undefined; // Clear reset token
      user.resetPasswordExpires = undefined; // Clear expiry time
      await user.save();

      return { success: true, message: "Password has been reset successfully" };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = new AccountService();
