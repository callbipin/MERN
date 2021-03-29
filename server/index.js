const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
dotenv.config({ path: "./config.env" });
require("./db/conn");
const PORT = process.env.PORT;
const User = require("./model/userSchema");
app.use(require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
