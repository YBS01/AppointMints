import mongoose from "mongoose"
import AppointmentDetails from "../models/appointmentDetails.js"

export const getAppointments = async (req, res) => {    
    try {
        const appointmentDetails = await AppointmentDetails.find()
        console.log(appointmentDetails)


        res.status(200).json(appointmentDetails)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createAppointment = async (req, res) => {
    const appointment = req.body

    const newAppointment = new AppointmentDetails(appointment)

    try {
        await newAppointment.save()
        res.status(201).json(newAppointment)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateAppointment = async (req, res) => {
    const { id: _id } = req.params
    const appointment = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No appointment with that id');

    const updatedAppountment = await AppointmentDetails.findByIdAndUpdate(_id, appointment, { new: true });

    res.json(updatedAppountment)
}