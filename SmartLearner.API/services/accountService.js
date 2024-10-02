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
const PlanUser = require("../models/planUserModel");
const { ObjectId } = require("mongodb");

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

      console.log(user.isBcryptHashed, "user.isBcryptHashed");

      if (user.isBcryptHashed) {
        const isPasswordValid = await bcrypt.compare(password, user.password);

        console.log(!isPasswordValid, "isPasswordValid");
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

      console.log("85", user._id);
      // Fetch userRole
      const userRole = await userRoleServices.getUserRoleAsync(user._id);

      console.log("89", userRole);
      if (!userRole) {
        throw new Error("Invalid user");
      }

      console.log("94");
      // Fetch user's Role
      const role = await roleServices.getRoleByIdAsync(userRole.roleId);

      if (!role.success) {
        throw new Error("Invalid user");
      }

      // Generate JWT token with expiry
      // Generate JWT token with expiry
      const jwtAge = 60;
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
          role: role.data.name,
          token,
          expiresIn: jwtAge * 1000,
        },
      };
    } catch (err) {
      console.log(err.message, "err.messageerr.message");
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

  // ////////////////////////////////////////////////////////////
  async createFreeTrialSubscription(userId) {
    try {
      const freeTrialPlan = await PlanUser.findOne({ planname: "Free Trial" });
      if (!freeTrialPlan) throw new Error("Free trial plan not found");

      const userSubscription = new UserSubscription({
        userId: userId,
        subscriptionId: freeTrialPlan._id,
      });

      await userSubscription.save();
      return { message: "Free trial subscription created successfully" };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // Check if the user has an active free trial
  async checkActiveFreeTrial(userId) {
    try {
      const userSubscription = await UserSubscription.findOne({
        userId: userId,
        subscriptionId: {
          $in: await PlanUser.find({ planCategory: "Trial" }).distinct("_id"),
        }, // Adjust this line if necessary
      });

      if (userSubscription) {
        const planDetails = await PlanUser.findById(
          userSubscription.subscriptionId
        );
        const currentDate = new Date();
        return currentDate <= planDetails.planEndDate;
      }

      return false; // No active free trial
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // Updated registerUserAsync to include free trial subscription creation
  async registerUserAsync(userData) {
    try {
      const { username, email, password, phoneNumber } = userData;

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
        isBcryptHashed: true,
      });

      // Create free trial subscription
      await this.createFreeTrialSubscription(user._id);

      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  //////////////////////////////////////////////////////////

  async getUserSubscription(params_id) {
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
          $addFields: {
            roleId: {
              $toString: "$result.roleId",
            },
            roleName: {
              $toString: "$result.result",
            },
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
          $project: {
            password: 0,
          },
        },
      ];
      const users = await User.aggregate(aagr);

      const oneUser = users[0];

      let msg = "";
      console.log(oneUser.isSubscription, oneUser.planresult);

      if (oneUser.isSubscription && oneUser.planresult == undefined) {
        const updat = { subscriptionType: "", isSubscription: false };
        msg = "Plan Expired";
        const upre = await User.findByIdAndUpdate(
          new ObjectId(params_id),
          updat,
          { new: true }
        );
      }

      const userss = await User.aggregate(aagr);

      const oneUsers = userss[0];

      const totalCount = await User.countDocuments({ _id: params_id });
      const resultObject = {
        message: msg,
        statusCode: 200,
        success: true,
        data: oneUsers,
      };

      return resultObject;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async checkoutUserSubscription(params_id, reqData) {
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
        {
          $project: {
            password: 0,
          },
        },
      ];
      const users = await User.aggregate(aagr);

      console.log(users, "usersusersusersusers");

      const totalCount = await User.countDocuments({ _id: params_id });

      let resultObject = {};
      if ("Free Trial" == reqData.title) {
        console.log(users[0], "users[0]");
        if (users[0].isFreeTrialUsed) {
          resultObject = {
            message: "Free Trial Already Used",
            statusCode: 400,
            success: false,
            data: users[0],
          };
        } else {
          const updat = {
            subscriptionType: reqData.title,
            isSubscription: true,
          };

          let addonDays = 90;
          if (reqData.title == "Free Trial") {
            updat["isFreeTrialUsed"] = true;

            addonDays = 7;
          }

          const upre = await User.findByIdAndUpdate(
            new ObjectId(params_id),
            updat,
            { new: true }
          );
          console.log(upre, params_id, updat, "upreupreupre");
          const millisecondsInADay = 24 * 60 * 60 * 1000;
          await PlanUser.create({
            planname: reqData.title,
            userId: params_id,
            planEndDate: Date.now() + addonDays * millisecondsInADay,
          });
          resultObject = {
            message: "Free Trial applied successfully",
            statusCode: 200,
            success: true,
            data: users[0],
          };
        }
      } else if (reqData.title == "Standard Subscription") {
        resultObject = {
          message: reqData.title + " applied successfully",
          statusCode: 200,
          success: true,
          data: users[0],
        };
      } else {
        resultObject = {
          message: reqData.title + " applied successfully",
          statusCode: 200,
          success: true,
          data: users[0],
        };
      }

      return resultObject;
    } catch (err) {
      console.log(err, "Dsadasdasdasdas");
      throw new Error(err.message);
    }
  }
  async getUserSubscriptionType(params_id) {
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
          $addFields: {
            roleId: {
              $toString: "$result.roleId",
            },
            roleName: {
              $toString: "$result.result",
            },
          },
        },
        {
          $project: {
            password: 0,
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
      const role = await User.findByIdAndUpdate(roleId, roleData, {
        new: true,
      });
      const resultObject = {
        message: "Updated successfully",
        statusCode: 201,
        success: true,
        data: { role },
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
}

module.exports = new AccountService();
