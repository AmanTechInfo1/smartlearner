const express = require("express");
const path = require("path");
const prerender = require("prerender-node");
const app = express();

// Set prerender token
app.use(prerender.set("prerenderToken", "1GUqcwJ5AHPJmlN0w5q5")); // Replace with your actual token

// Serve static files from build folder (one level up from this file)
app.use(express.static(path.join(__dirname, "..", "build")));

// Handle SPA routing (send index.html for all unmatched routes)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
