const User = require("../Models/UserModel");
// const joi = require("joi");


//Display All Users 
const allUsers = async (req, res) => {
    try {
        const userData = await User.find();
        res.status(200).send(userData);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send(error);
    }
};

// Create User
const createUser = async (req, res) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
        };
        if (!user) {
            return res.status(400).json({ error: 'Incomplete details.....' });
        } else {
            const result = new User(user).save();
            // const result1 = await result.save();
            res.status(200).send({ msg: "record inserted...." });

        }

    } catch (error) {
        res.json({ status: 'error' })
    }
};


// Update User
const updateUser = async (req, res) => {
    console.log(req.params)
    try {
        const userData = await User.findByIdAndUpdate(req.params.uid, req.body);
        res.status(200).json({success: true, msg:"updated successfully"})
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({success: false, msg: error})
    }
};

// Delete User
const deleteUser = async (req, res) => {
    const data = req.params.uid
    console.log(data);
    try {
        const userData = await User.findByIdAndDelete(data);
        res.status(200).json({success: true, msg:"Deleted successfully"})
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({success: false, msg: error})
    }
};

module.exports = {
    allUsers,
    createUser,
    updateUser,
    deleteUser
}