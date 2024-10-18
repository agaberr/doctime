const User = require('../models/User');
const Booking = require('../models/Booking');
const Doctor = require('../models/Doctor');
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

    getUserProfile: async (req, res) => {
        const userId = req.userId;

        try {
            const user = await User.findById(userId);

            if (!user) {
                return res.status(401).json({success:false, message: 'User not found'});
            }

            const {password, ...rest} = user._doc;
            
            res.status(200).json({success: true, message: 'User data found successfully', data: {...rest}});

        } catch (err) {
            res.status(500).json({success: false, message: 'Server error'}); 
        }
    },

    getAppointments: async (req, res) => {
        try {

          // Find all bookings for the user
          const bookings = await Booking.find({ user: req.params.id });
      
          if (!bookings || bookings.length === 0) {
            return res.status(404).json({ success: false, message: 'No appointments found for this user' });
          }
      
          // Extract doctor IDs from the bookings
          const doctorIds = bookings.map(booking => booking.doctor);
      
          // Find doctors based on the extracted doctor IDs
          const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select("-password");
      
          res.status(200).json({ success: true, message: 'Appointments found successfully', data: doctors });
        } catch (err) {
          res.status(500).json({ success: false, message: 'Server error' });
        }
      },

      deleteAppointment: async (req, res) => {
        const appointmentId = req.params.id;

        try {
            // Find the appointment by ID
            const appointment = await Booking.findById(appointmentId);

            if (!appointment) {
                return res.status(404).json({ success: false, message: 'Appointment not found' });
            }

            // Ensure that the appointment belongs to the logged-in user
            if (appointment.user.toString() !== req.userId) {
                return res.status(403).json({ success: false, message: 'Unauthorized to delete this appointment' });
            }

            // Delete the appointment
            await Booking.findByIdAndDelete(appointmentId);

            res.status(200).json({ success: true, message: 'Appointment deleted successfully' });
        } catch (err) {
            res.status(500).json({ success: false, message: 'Server error' });
        }
    }
      
}

module.exports = userController;