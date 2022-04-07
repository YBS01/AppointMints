import React from 'react'
import Appointment from './Appointment/Appointment'

import useStyles from './styles'

const Appointments = () => {
    const classes = useStyles()
    return (
        <>
            <h1>APPOINTMENTS</h1>
            <Appointment />
            <Appointment />
        </>
    )
}

export default Appointments