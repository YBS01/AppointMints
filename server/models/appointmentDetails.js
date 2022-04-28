import mongoose from "mongoose"

const appointmentSchema = mongoose.Schema({
    appointmentID: Number,               //
    memberID: Number,                    //
    memberTitle: String,                 //tittle
    memberName: String,                  //tittle
    memberEmail: String,                 //creator
    appointmentDate: Date,               //add date below title field
    appointmentDescription: String,      //message
    selectedFile: String,
    available: {                 //likeCount
        type: [String],
        default: [],
    },
    tags: [String],                      //
    createdAt: {
        type: Date,
        default: new Date(), 
    },                       
    employeeID: Number,                  //
})

const AppointmentDetails = mongoose.model('AppointmentDetails', appointmentSchema)

export default AppointmentDetails