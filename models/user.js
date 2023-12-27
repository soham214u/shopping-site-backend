const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    phone: {type: Number, required: true},
    emailId: {type: String, required: true},
    imgUrl: {type: String, required: true},
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;