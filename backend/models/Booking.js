const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctorName: {
      type: "string",
    },
    appointmentDate: {
      type: Date,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
