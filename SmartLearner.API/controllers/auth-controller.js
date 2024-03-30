const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, email, mobile, accountType } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    //hash the password
  

    const userCreated = await User.create({
      username,
      password,
      email,
      mobile,
      accountType,
    });

    res.status(201).json({
      msg: "Registration Succesfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};

/////////////User Login //////////////////////////////////
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);

    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).json({
        msg: "Login Successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
   
    }
  } catch (error) {
    res.status(500).json("internal server error");
    next(error);
   
  }
};

module.exports = { register, login };
