import React from "react"
import { useSelector } from "react-redux"
//import appointments from "../../reducers/appointments"


import Appointment from "./Appointment/Appointment"
//import useStyles from './styles'

const Appointments = () => {
    const appointments = useSelector((state) => state.appointments)
    //const classes = useStyles();

  console.log(appointments)

    return(
        <>
            <h1>APPOINTMENTS</h1>
            <Appointment />
            <Appointment />
        </>
    )
}

export default Appointments