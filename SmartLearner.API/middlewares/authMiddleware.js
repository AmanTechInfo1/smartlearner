const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Get token from request header
  const token = req.header("Authorization");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "My name is Akash");

    // Add user object to request for further processing
    req.user = decoded;
    next(); // Move to next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = authMiddleware;
