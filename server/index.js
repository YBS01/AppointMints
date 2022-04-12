import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors  from 'cors'
import dotenv from 'dotenv'

import appointmentRoutes from './routes/appointments.js'

const app = express()

dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/appointments', appointmentRoutes)

//const CONNECTION_URL = 'mongodb+srv://AppointMe:WLMMeters24@cluster0.rndby.mongodb.net/AppointMints?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.messaage))