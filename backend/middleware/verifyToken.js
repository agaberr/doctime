const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Doctor = require('../models/Doctor')
const dotenv = require('dotenv');

dotenv.config();

const auth = async (req, res, next) => {

    try {
        const authToken = req.headers.authorization;

        if (!authToken || !authToken.startsWith('Bearer'))
            return res.status(401).json({ error: "Unauthorized" });


        const token = authToken.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.id;
        req.role = decoded.role;

        next();

    } catch (error) {
        if (err.name === "TokenExpiredError")
        {
            return res.status(401).json({ error: "Token expired" });
        }
        res.status(401).json({ message: "Invalid token" });
    }

};

const restrict = roles => async (req, res, next) => {

    const userId = req.userId;

    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if (patient) {
        user = patient;
    } else if (doctor) {
        user = doctor;
    }

    if(!roles.includes(user.role))
    {
        return res.status(403).json({ message: "Forbidden" });
    }

    next();
}

module.exports = { auth, restrict };