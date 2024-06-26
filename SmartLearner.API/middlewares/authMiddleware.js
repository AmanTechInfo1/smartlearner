const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.header("Authorization");
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET || "SMARTLEARNERJWT",
      (err) => {
        if (err) {
          console.log(err.message);
          res.status(401).json({
            "msg":"Unauthorized Access"
          });
        } else {
          const decoded = jwt.decode(token, { complete: true });
          req.userId = decoded.payload.id
          next();
        }
      }
    );
  } else {
    // res.redirect("/login");
    res.status(401).json({
      "msg":"Unauthorized Access"
    });
  }
};
module.exports = { requireAuth };
