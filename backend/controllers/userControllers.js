const User = require('../models/User');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const userController = {

    getAllUsers: async (req, res) => {
        
        try {
            
            const users = await User.find({}).select("-password");

            res.status(200).json({success: true, message: 'Users found successfully', data: users});
        
    } catch (err) {
        res.status(500).json({ message: 'Server error'});
    }
    },
    getUser: async (req, res) => {
        const id = req.params.id;
        
        try {
            
            const user = await User.findById(id).select("-password");

            res.status(200).json({success: true, message: 'User found successfully', data: user});
        
    } catch (err) {
        res.status(500).json({ message: 'Server error'});
    }
    },
    updateUser: async (req, res) => {
        
        const id = req.params.id;
        
        try {
            
            const updatedUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true}).select("-password");

            res.status(200).json({success: true, message: 'User updated successfully', data: updatedUser});
        
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
    },
    deleteUser: async (req, res) => {
        const id = req.params.id;
        
        try {
            
            const deleteUser = await User.findByIdAndDelete(id,);
            res.status(200).json({success: true, message: 'User deleted successfully'});
        
    } catch (err) {
        res.status(500).json({ message: 'Server error'});
    }
    },
}

module.exports = userController;