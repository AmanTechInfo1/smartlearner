const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, email, phone, accountType } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    //hash the password
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      password: hash_password,
      email,
      phone,
      accountType,
    });

    res
      .status(200)
      .json({
        msg: "Registration Succesfull",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

module.exports = { register };
