import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors  from 'cors'
import dotenv from 'dotenv'

import appointmentRoutes from './routes/appointments.js'
import userRoutes from './routes/users.js'
// import twilio from 'twilio'
const app = express()

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = ('twilio')('QDAFwabMCYdlCvbgOzxuEF4s5ImS6yQDCkLUvZK0', '9dfa536eece8ab717dbdbb71a3d0dbdb');

// client.messages
//       .create({from: '+16812498540', body: 'Hi there', to: '+12687753033'})
//       .then(message => console.log(message.sid));


dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/appointments', appointmentRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('Hello to AppointMints API')
})

//const CONNECTION_URL = 'mongodb+srv://AppointMe:WLMMeters24@cluster0.rndby.mongodb.net/AppointMints?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.messaage))