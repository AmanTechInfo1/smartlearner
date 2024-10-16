const roleService = require("../services/roleService");
const { translate } = require("free-translate");

class RoleController {
  async createRole(req, res, next) {
    try {
      const { name } = req.body;
      const lowerCaseName = name.toLowerCase();
      const role = await roleService.createRoleAsync({ name: lowerCaseName });
      res.status(201).json(role);
    } catch (err) {
      next(err);
    }
  }

  async getRoles(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const roles = await roleService.getRolesAsync(page, pagesize, search);
      res.json(roles);
    } catch (err) {
      next(err);
    }
  }

  async getRoleList(req, res, next) {
    try {
      const roles = await roleService.getRoleListAsync();
      res.json(roles);
    } catch (err) {
      next(err);
    }
  }

  async getRoleById(req, res, next) {
    try {
      const role = await roleService.getRoleByIdAsync(req.params.id);
      res.json(role);
    } catch (err) {
      next(err);
    }
  }

  async updateRole(req, res, next) {
    try {
      const role = await roleService.updateRoleAsync(req.params.id, req.body);
      res.json(role);
    } catch (err) {
      next(err);
    }
  }

  async deleteRole(req, res, next) {
    try {
      const result = await roleService.deleteRoleAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  // Translate given text and options
  async translator(req, res, next) {
    try {
      const { question, lang, option1, option2, option3, option4 } = req.body;

      // Prepare translation tasks
    



      const translations = await translate(req.body.question, { from: 'en', to: req.body.lang });
      let options = { question: translations };
      
      if (req.body.option1) {
        options.option1 = await translate(req.body.option1, { from: 'en', to: req.body.lang });
      }
      if (req.body.option2) {
        options.option2 = await translate(req.body.option2, { from: 'en', to: req.body.lang });
      }
      if (req.body.option3) {
        options.option3 = await translate(req.body.option3, { from: 'en', to: req.body.lang });
      }
      if (req.body.option4) {
        options.option4 = await translate(req.body.option4, { from: 'en', to: req.body.lang });
      }
      

      // Execute all translation promises concurrently
      const promisesArray = Object.values(translations);
      const results = await Promise.all(promisesArray);

      // Construct the result object
      const resultObject = {};
      let index = 0;
      for (const key in translations) {
        resultObject[key] = results[index++];
      }

      res.json(resultObject);
    } catch (err) {
      next(err); // Forward error to error handler
    }
  }
}

module.exports = new RoleController();
