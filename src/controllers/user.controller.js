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

userController.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const sessionToken =await userService.loginInDB(email, password);
        res.status(200).json({ message: "Login successful", sessionToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = userController;