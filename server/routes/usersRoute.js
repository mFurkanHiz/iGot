const express = require("express");
const UserModel = require("../models/UserModel");
const router = express.Router();

//#region REGISTER
const REGISTER_END_POINT = "/register";
router.post(REGISTER_END_POINT, async (req, res) => {
  const { username, password, email, name, surname, img, isCustomer, isAdmin } =
    req.body;

  const isUsernameExist = await UserModel.findOne({ username: username });
  const isEmailExist = await UserModel.findOne({ email: email });

  if (isUsernameExist) {
    res.status(400).json({ message: "Username is exist" });
  } else if (isEmailExist) {
    res.status(400).json({ message: "Email is exist" });
  } else {
    const newUser = new UserModel({
      username,
      password,
      email,
      name,
      surname,
      img,
      isCustomer,
      isAdmin,
    });
    try {
      await newUser.save();
      const respondString = `A new user has been registered. Username: ${username}, E-mail: ${email} Name: ${name}, Surname: ${surname}, Status: ${
        isAdmin ? "Admin" : isCustomer ? "Customer" : "Seller"
      }.`;
      res.send(respondString);
    } catch (error) {
      res.send(`Registration is failed. Error: ${error}`);
    }
  }
});

//#endregion

//#region LOGIN
const LOGIN_END_POINT = "/login";
router.post(LOGIN_END_POINT, async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await UserModel.find({
      username: username,
      password: password,
    });
    if (user.length > 0) {
      res.send(`User redistered. Username: ${user[0]}`);
    } else {
      res.status(400).json({ message: "User does not exist" });
    }
  } catch (error) {
    res.send(`Errod: ${error}`);
  }
});

//#endregion

module.exports = router;
