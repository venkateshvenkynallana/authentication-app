const express = require("express");
const { signUp, login, logout } = require("../controllers/authController.js");

const authRouter = express.Router();

authRouter.post("/userSignUp", signUp);
authRouter.post("/userLogin", login);
authRouter.post("/logout", logout);

module.exports = authRouter;
