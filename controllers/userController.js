const UserModel = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, phone, emailId, imgUrl } = req.body;

    let newUser = new UserModel ({
      firstName,
      lastName,
      phone,
      emailId,
      imgUrl,
    })

    newUser = await newUser.save();

    res.status(200).json(newUser);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
};

exports.users = async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch(e) {
    res.status(500).json({error: e.message});
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await UserModel.findByIdAndRemove(userId)

    res.status(200).json({message: `User with id ${userId} deleted successfully`});
  } catch(e) {
    res.status(500).json({error: e.message});
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { firstName, lastName, phone, emailId, imgUrl } = req.body;

    const userId = req.params.id;

    let updatedUser = new UserModel ({
      firstName,
      lastName,
      phone,
      emailId,
      imgUrl,
      _id: userId,
    })

    await UserModel.findByIdAndUpdate(userId, updatedUser);

    res.status(200).json({message: `User with id ${userId} updated successfully`});
  } catch(e) {
    res.status(500).json({error: e.message});
  }
};