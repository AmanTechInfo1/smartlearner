const roleService = require("../services/roleService");
const { Translate } = require("@google-cloud/translate").v2;

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
  async translator(req, res, next) {
    try {
      const { question, lang, option1, option2, option3, option4 } = req.body;

      // Create an array to hold the translation promises
      const translationPromises = [];

      // Push the main question translation promise
      translationPromises.push(Translate(question, { from: "en", to: lang }));

      // Push option translations if they exist
      if (option1)
        translationPromises.push(Translate(option1, { from: "en", to: lang }));
      if (option2)
        translationPromises.push(Translate(option2, { from: "en", to: lang }));
      if (option3)
        translationPromises.push(Translate(option3, { from: "en", to: lang }));
      if (option4)
        translationPromises.push(Translate(option4, { from: "en", to: lang }));

      // Wait for all translations to complete
      const translatedResults = await Promise.all(translationPromises);

      // Construct the response object
      const response = {
        question: translatedResults[0], // The first item is the translated question
      };

      // Map the remaining results to options
      if (option1) response.option1 = translatedResults[1];
      if (option2) response.option2 = translatedResults[2];
      if (option3) response.option3 = translatedResults[3];
      if (option4) response.option4 = translatedResults[4];

      // Send the response
      res.json(response);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new RoleController();
