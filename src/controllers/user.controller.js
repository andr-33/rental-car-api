const userService = require("../services/user.service");
const userController = {};

userController.createUser = async (req, res) => {
    try{
        const user = req.body;
        await userService.createUserInDB(user);
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = userController;