const roleService = require('../services/roleService');
const { translate } = require('free-translate');

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

      console.log(req.body.lang, "req.body;req.body;req.body;")
      // const result = await roleService.deleteRoleAsync(req.params.id);
      const translatedText = translate(req.body.question, { from: 'en', to: req.body.lang });
      let options = {}
      options["question"] = translatedText


      if (req.body.option1) {
        const option1 = translate(req.body.option1, { from: 'en', to: req.body.lang });
        // options.push(option1)
        options["option1"] = option1
      }
      if (req.body.option2) {
        const option2 = translate(req.body.option2, { from: 'en', to: req.body.lang });
        // options.push(option2)
        options["option2"] = option2
      }
      if (req.body.option3) {
        const option3 = translate(req.body.option3, { from: 'en', to: req.body.lang });
        // options.push(option3)
        options["option3"] = option3
      }
      if (req.body.option4) {
        const option4 = translate(req.body.option4, { from: 'en', to: req.body.lang });
        // options.push(option4)
        options["option4"] = option4
      }

      // const translatedText = await translate(['Your view could be obstructed', 'Your sun visor might get tangled', 'Your radio reception might be affected', 'Your windscreen could mist up more easily'], { from: 'en', to: req.body.lang });


      let promisesArray = Object.values(options);

      await Promise.all(promisesArray)
        .then(results => {
          // All promises resolved successfully
          let resultObject = {};
          Object.keys(options).forEach((key, index) => {
            resultObject[key] = results[index];
          });
          res.json(resultObject);
        })
        .catch(error => {
          // If any of the promises fail, the catch block will handle the error
          console.error(error);
        });

    } catch (err) {
      next(err);
    }
  }

  // async translator(req, res, next) {
  //   try {
  //     const lang = req.body.lang;
  //     const translatedText = await translate(req.body.question, { from: 'en', to: lang });

  //     let options = {
  //       question: translatedText
  //     };

  //     // Translate options if they exist in the request body
  //     const translatePromises = [];
  //     if (req.body.option1) {
  //       translatePromises.push(translate(req.body.option1, { from: 'en', to: lang }).then(result => options.option1 = result));
  //     }
  //     if (req.body.option2) {
  //       translatePromises.push(translate(req.body.option2, { from: 'en', to: lang }).then(result => options.option2 = result));
  //     }
  //     if (req.body.option3) {
  //       translatePromises.push(translate(req.body.option3, { from: 'en', to: lang }).then(result => options.option3 = result));
  //     }
  //     if (req.body.option4) {
  //       translatePromises.push(translate(req.body.option4, { from: 'en', to: lang }).then(result => options.option4 = result));
  //     }

  //     console.log(translatePromises,"translatePromises")
  //     // Wait for all translation promises to complete
  //     await Promise.all(translatePromises);

  //     // Send the translated options as JSON response
  //     res.json(options);
  //   } catch (err) {
  //     console.error(err);
  //     next(err); // Pass error to the error handling middleware
  //   }
  // }
}

module.exports = new RoleController();
