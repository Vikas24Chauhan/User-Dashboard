const User = require("../models/user-model");
const Contact = require("../models/contact-models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length == 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getAllUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json({ message: user });
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length == 0) {
      return res.status(404).json({ message: "No contact-form found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted successfilly " });
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updateUser = await User.updateOne(
      { _id: id },
      { $set: updatedUserData }
    );
    return res.status(200).json({ updateUser });
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted successfilly " });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllUsersById,
  getAllContacts,
  deleteUserById,
  updateUserById,
  deleteContactById,
};
