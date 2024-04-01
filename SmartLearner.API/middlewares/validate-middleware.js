const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    res.status(201).json({
      msg: err.errors[0].message || "Fill the input properly",
      success: false,
    });
    // // const status = 422;
    // // const message = "Fill the input properly"
    // // const extraDetails = err.errors[0].message;
    // // const success = false;
    // // const error = {
    // //   status,
    // //   success,
    // //   message,
    // //   extraDetails
    // // };


    // //next(error);
  }
};
module.exports = validate;
