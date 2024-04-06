const accountService = require("../services/accountService");
const roleService = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");

class AccountController {
  async registerUser(req, res, next) {
    try {
      var userData = req.body;
      const user = await accountService.registerUserAsync(userData);

      if (userData?.roleName) {
        const role = await roleService.getRoleByNameAsync(userData?.roleName);
        if (!role) {
          throw new Error("Role not found");
        }
        await userRoleServices.assignRoleToUserAsync(user._id, role._id);
        res.status(201).json(user);
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
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AccountController();
