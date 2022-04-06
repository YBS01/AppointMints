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