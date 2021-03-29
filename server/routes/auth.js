const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");
const User = require("../model/userSchema");

//Middleware
function middleware(req, res, next) {
  console.log(`Hello my Middleware`);
  next();
}

router.get("/", (req, res) => {
  res.send("Hello to the Server");
});
router.get("/about", middleware, (req, res) => {
  res.send(`I am Bipin Rimal`);
});

router.get("/work", (req, res) => {
  res.send(`My works`);
});

router.get("/donate", (req, res) => {
  res.send(`Help me become richer`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Field Can not be empty" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      res.status(201).json({ message: "User sucessfully registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Signin route

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password can't be empty" });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const passwordMatch = await bcrypt.compare(password, userLogin.password);

      if (!passwordMatch) {
        res.json({ error: "User sign in unsuccessful" });
      } else {
        res.json({ message: "User Singed in Sucessfully" });
      }
    } else {
      res.json({ message: "Email not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
