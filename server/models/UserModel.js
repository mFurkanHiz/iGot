const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require },
    password: { type: String, require },
    email: { type: String, require },
    name: { type: String, require },
    surname: { type: String, require },
    img: { type: String },
    isCustomer: { type: Boolean, require },
    isAdmin: { type: Boolean, require },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
