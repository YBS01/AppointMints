import mongoose from "mongoose"
import AppointmentDetails from "../models/appointmentDetails.js"
import router from "../routes/appointments.js"

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

    const newAppointment = new AppointmentDetails({ ...appointment, createdAt: new Date().toISOString()})
    //const newAppointment = new AppointmentDetails({ ...appointment, employee: req.userId, createdAt: new Date().toISOString()})
    //const newAppointment = new AppointmentDetails({ ...appointment, creator: req.userId, createdAt: new Date().toISOString()})
    //const newAppointment = new AppointmentDetails(appointment)

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

    
    const updatedAppointment = await AppointmentDetails.findByIdAndUpdate(_id, { ...appointment, _id}, { new: true });

    res.json(updatedAppointment)
}

export const deleteAppointment = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No appointment with that id');

    await AppointmentDetails.findByIdAndRemove(id)

    res.json({ message: 'Appointment deleted successfully'})
}

export const employeeAvailable = async (req, res ) => {
    const { id } = req.params

    if (!req.userId) return res.json({ message : 'Unauthenticated' })

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No appointment with that id'); //trouble below vid2_46:46

    const appointment = await AppointmentDetails.findById(id)

    const index = appointment.available.findIndex((id) => id === String (req.userId))

    if( index === -1) {
        //add like
        appointment.available.push(req.userId)
    } else {
        appointment.available = appointment.available.filter((id) => id !== String(req.userId))
    }

    // const updatedAppointment = await AppointmentDetails.findByIdAndUpdate(id, { employeeAvailable: appointment.employeeAvailable + 1  }, { new: true })
    const updatedAppointment = await AppointmentDetails.findByIdAndUpdate(id, post, { new: true })

    res.json(updatedAppointment)
}

//export default router