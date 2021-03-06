const usersController = {};
const User = require('../models/User');

usersController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users); 
}
usersController.createUser = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json({message: "User Saved"});
}

usersController.getUser = async (req,res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}
usersController.updateUser = async (req,res) => {
    const {username} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {username});
    res.json({message: "User Updated"});
}
usersController.deleteUser = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: "User Deleted"});
}

module.exports = usersController;