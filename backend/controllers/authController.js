const User = require('../models/User');
const Doctor = require('../models/Doctor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const generateToken = user=> {
    return jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET)};

dotenv.config();

const authController = {


    signup: async (req, res) => {

        const { email, password, name, role, photo, gender} = req.body;

        try {
            let user = null
            if (role === 'patient') {
                user = await User.findOne({ email }).exec(); // remove exec if not working
            } else if (role === 'doctor') {
                user = await Doctor.findOne({ email }).exec();
        }

        if(user) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        if (role === 'patient') {
            user = new User({
                email,
                password: hashedPassword,
                name,
                photo,
                gender
            });
        } else if (role === 'doctor') {
            user = new Doctor({
                email,
                password: hashedPassword,
                name,
                photo,
                ticketPrice
            });
        }

        await user.save();

        res.status(200).json({success:true, message: 'User created successfully'});

        } catch (err) {
            return res.status(500).json({ message: 'Server Error' });
        }


    },

    signin: async (req, res) => {
        
        // console.log(password);
        const {email, password: userPassword} = req.body;
        
        try {

            let user = null;

            const patient = await User.findOne({email});
            const doctor = await User.findOne({email});

            if (patient) {
                user= patient;
            }
            if (doctor) {
                user= doctor;
            }

            if (!user) {
                return res.status(401).json({ message: 'user not found' });
            }

            const isPassMatch = await bcrypt.compare(userPassword, user.password);
            
            if (!isPassMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = generateToken(user);

            const {password, role, appointments, ...rest} = user._doc;

            res.status(200).json({status: 'true', message: 'User logged in successfully', token, data: {...rest}, role});

            } catch (err) {
                return res.status(500).json({ message: 'Server Error' });
            }
    }
}

module.exports = authController;