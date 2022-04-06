import mongoose from "mongoose"

const appointmentSchema = mongoose.Schema({
    appointmentID: int,
    appointmentTitle: String,
    appointmentDescription: String,
    memberID: int,
    employeeID: int,
    appointmentDate: Date,  
})

const AppointmentDetails = mongoose.model('AppointmentDetails', appointmentSchema)

export default AppointmentDetails