const Doctor = require('../models/Doctor');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const DoctorController = {

    getAllDoctors: async (req, res) => {
        
        try {

            const {query} = req.query;
            let doctors;

            if (query){
                doctors = await Doctor.find({isApproved:"approved", $or:[{name: {$regex:query, $options: "i"}}, 
                    {specialization: {$regex:query, $options: "i"}}
                ]}).select("-password");
            } else {
                doctors = await Doctor.find({isApproved:"approved"}).select("-password")
            }

            res.status(200).json({success: true, message: 'Doctors found successfully', data: doctors});
        
    } catch (err) {
        res.status(500).json({ message: 'Server error'});
    }
    },
    getDoctor: async (req, res) => {
        const id = req.params.id;
        
        try {
            
            const doctor = await Doctor.findById(id).select("-password");

            res.status(200).json({success: true, message: 'Doctor found successfully', data: doctor});
        
    } catch (err) {
        res.status(500).json({ message: 'Server error'});
    }
    },
    updateDoctor: async (req, res) => {
        
        const id = req.params.id;
        
        try {
            
            const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set:req.body}, {new:true}).select("-password");

            res.status(200).json({success: true, message: 'Doctor updated successfully', data: updatedDoctor});
        
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
    },
    deleteDoctor: async (req, res) => {
        const id = req.params.id;
        
        try {
            
            const deleteDoctor = await Doctor.findByIdAndDelete(id,);
            res.status(200).json({success: true, message: 'Doctor deleted successfully'});
        
    } catch (err) {
        res.status(500).json({ message: 'Server error'});
    }
    },
}

module.exports = DoctorController;