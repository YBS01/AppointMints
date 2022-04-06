import mongoose from "mongoose"

const appoNumbermentSchema = mongoose.Schema({
    appoNumbermentID: Number,
    appoNumbermentTitle: String,
    appoNumbermentDescription: String,
    memberID: Number,
    employeeID: Number,
    appoNumbermentDate: Date,  
})

const AppoNumbermentDetails = mongoose.model('AppoNumbermentDetails', appoNumbermentSchema)

export default AppoNumbermentDetails