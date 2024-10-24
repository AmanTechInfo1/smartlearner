const express = require("express");
const connectDB = require("./config/database");
const errorHandler = require("./middlewares/errorHandler");
const accountRoutes = require("./routes/accountRoutes");
const roleRoutes = require("./routes/roleRoutes");
const productRoutes = require("./routes/productRoutes");
const productSpecialRoutes = require("./routes/productSpecialRoutes");
const quizRoutes = require("./routes/quizRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const serviceRoutes = require("./routes/servicesRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const callBackRoutes = require("./routes/callBackRoutes");
const contactRoutes = require("./routes/contactRoutes");
const drivenFormRoutes = require("./routes/drivenFormRoutes");
const orderRoutes = require("./routes/orderRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const blogRoutes = require("./routes/blogRoutes");

const path = require("path");

const cors = require("cors");

const app = express();

connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(cors({
  origin: 'https://web.smartlearner.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploads", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/static/no_image_found.jpg")); // Path to your alternative image
});
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/api/account", accountRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/product", productRoutes);
app.use("/api/productSpecial", productSpecialRoutes);
app.use("/api/serviceForm", serviceRoutes);
app.use("/api/enquiryForm", enquiryRoutes);
app.use("/api/callbackForm", callBackRoutes);
app.use("/api/contactForm", contactRoutes);
app.use("/api/drivenForm", drivenFormRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/blogs", blogRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`server is running ${PORT}`);
});

module.exports = app;
