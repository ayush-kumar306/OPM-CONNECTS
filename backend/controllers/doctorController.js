import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js"; // Added for fetching patient details

const loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await doctorModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const appointmentsDoctor = async (req, res) => {
    try {
        const { docId } = req.body;
        const appointments = await appointmentModel.find({ docId });

        res.json({ success: true, appointments });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const appointmentCancel = async (req, res) => {
    try {
        const { docId, appointmentId } = req.body;

        const appointmentData = await appointmentModel.findById(appointmentId);
        if (appointmentData && appointmentData.docId == docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });
            return res.json({ success: true, message: 'Appointment Cancelled' });
        }

        res.json({ success: false, message: 'Appointment Cancelled' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const appointmentComplete = async (req, res) => {
    try {
        const { docId, appointmentId } = req.body;

        const appointmentData = await appointmentModel.findById(appointmentId);
        if (appointmentData && appointmentData.docId == docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true });
            return res.json({ success: true, message: 'Appointment Completed' });
        }

        res.json({ success: false, message: 'Appointment Not Found or Already Completed' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const doctorList = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select(['-password', '-email']);
        res.json({ success: true, doctors });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const changeAvailablity = async (req, res) => {
    try {
        const { docId } = req.body;
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
        res.json({ success: true, message: 'Availability Changed' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const doctorProfile = async (req, res) => {
    try {
        const { docId } = req.body;
        const profileData = await doctorModel.findById(docId).select('-password');

        res.json({ success: true, profileData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const updateDoctorProfile = async (req, res) => {
    try {
        const { docId, fees, address, available } = req.body;
        await doctorModel.findByIdAndUpdate(docId, { fees, address, available });
        res.json({ success: true, message: 'Profile Updated' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const doctorDashboard = async (req, res) => {
    try {
        const { docId } = req.body;
        const appointments = await appointmentModel.find({ docId });

        let earnings = 0;
        let patients = new Set();

        appointments.forEach(item => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount;
            }
            patients.add(item.userId.toString());
        });

        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.size,
            latestAppointments: appointments.reverse()
        };

        res.json({ success: true, dashData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const bookAppointmentDoctor = async (req, res) => {
    try {
        const { docId, slotDate, slotTime, userId, amount } = req.body;

        // Check if doctor is available
        const doctor = await doctorModel.findById(docId);
        if (!doctor || !doctor.available) {
            return res.status(400).json({ success: false, message: "Doctor not available" });
        }

        // Prevent double-booking
        const existing = await appointmentModel.findOne({
            docId,
            slotDate,
            slotTime,
            cancelled: { $ne: true }
        });

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "This time slot is already booked. Please choose a different time."
            });
        }

        const patient = await userModel.findById(userId).select("-password");
        if (!patient) {
            return res.status(404).json({ success: false, message: "Patient not found" });
        }

        const newAppointment = new appointmentModel({
            docId,
            userId,
            userData: patient,
            docData: {
                _id: doctor._id,
                name: doctor.name,
                specialization: doctor.specialization,
                fees: doctor.fees
            },
            amount,
            slotDate,
            slotTime,
            date: new Date()
        });

        await newAppointment.save();

        res.status(200).json({
            success: true,
            message: "Appointment booked successfully",
            appointment: newAppointment
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export {
    loginDoctor,
    appointmentsDoctor,
    appointmentCancel,
    appointmentComplete,
    doctorList,
    changeAvailablity,
    doctorProfile,
    updateDoctorProfile,
    doctorDashboard,
    bookAppointmentDoctor
};
