const accountService = require("../services/accountService");
const dashboardService = require("../services/dashboardService");
const quizService = require("../services/quizService");
const roleService = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");

class dashboardController {
  async getDashboardCards(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const response = await dashboardService.getDashboardCards();
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

}

module.exports = new dashboardController();
