const express = require("express");
const connectDB = require("./config/database");
const errorHandler = require("./middlewares/errorHandler");
const accountRoutes = require("./routes/accountRoutes");
const roleRoutes = require("./routes/roleRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");

const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/account", accountRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/product", productRoutes);

app.use(errorHandler);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});