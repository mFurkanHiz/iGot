const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

var database = mongoose.connection;

database.on("connected", () => {
  console.log("Database [UP]");
});

database.on("error", () => {
  console.log("Database [DOWN]");
});
module.exports = mongoose;
