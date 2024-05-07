const accountService = require("../services/accountService");
const roleService = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");

class AccountController {
  async registerUser(req, res, next) {
    try {
      var userData = req.body;
      console.log(userData);
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
      const response = await accountService.getAllUsersAsync(page, pagesize, search);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AccountController();
