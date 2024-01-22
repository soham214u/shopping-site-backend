const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    emailId: {type: String, required: true},
    password: {type: Number, required: true},
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;