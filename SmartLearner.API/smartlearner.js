require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors")
const authRouter = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


// /////Lets tackel cors ////

const corsOption = {
  origin:"http://localhost:5173",
  methoda:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true,
}
app.use(cors(corsOption));


app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
