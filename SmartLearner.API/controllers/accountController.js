const accountService = require("../services/accountService");
const roleService = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");
const bcrypt = require("bcryptjs");
class AccountController {
  async registerUser(req, res, next) {
    try {
      var userData = req.body;
      const user = await accountService.registerUserAsync(userData);

      if (userData?.roleName) {
        const role = await roleService.getRoleByNameAsync(
          userData?.roleName.toLowerCase()
        );
        if (!role) {
          throw new Error("Role not found");
        }
        await userRoleServices.assignRoleToUserAsync(user._id, role._id);
        const resultObject = {
          message: "User registered successfully",
          statusCode: 201,
          success: true,
        };
        res.status(201).json(resultObject);
      } else {
        throw new Error("Provide appropriate Role");
      }
    } catch (err) {
      next(err);
    }
  }

  async loginUser(req, res, next) {
    try {
      const response = await accountService.loginUserAsync(req.body);
      const resultObject = {
        message: "Logged IN successfully",
        statusCode: 201,
        success: true,
        data: response,
      };
      res.status(201).json(resultObject);
    } catch (err) {
      next(err);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const response = await accountService.getAllUsersAsync(
        page,
        pagesize,
        search
      );
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
 

  async getOneUsers(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const response = await accountService.getOneUsersAsync(req.params.id);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req, res, next) {
    try {
     
      const updatedUser = await accountService.updateUserAsync(
        req.params.id,
        req.body
      );
      res.json(updatedUser);
    } catch (err) {
      console.error("Error updating user: ", err);
      next(err);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const result = await accountService.deleteUserAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async forgotPassword(req, res) {
    const { email } = req.body;

    try {
      const result = await accountService.forgotPasswordAsync(email);
      res.json(result);
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
  async resetPassword(req, res) {
    const { resetToken, newPassword } = req.body;

    try {
      const result = await accountService.resetPasswordAsync(resetToken,newPassword);
      res.json(result);
    } catch (err) {
      res.status(400).json({success: false,  message: err.message });
    }
  }
}

module.exports = new AccountController();
