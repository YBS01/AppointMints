import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'

import useStyles from './styles'

const Form = () => {
    const classes = useStyles()

    const [appointmentData, setAppointmentData] = useState({
        memberTitle: '', memberName: '', memberEmail: '', appointmentDate: '', appointmentDescription: '' })

    const handleSubmit = () => {

    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h6'>Create an Appointment</Typography>

                <TextField  
                name='memberEmail' 
                variant='outlined' 
                label='email'
                fullWidth
                value={appointmentData.creator}
                onChange={(e) => setAppointmentData({...appointmentData, creator: e.target.value})}
                />

                <TextField  
                name='memberEmail' 
                variant='outlined' 
                label='email'
                fullWidth
                value={appointmentData.creator}
                onChange={(e) => setAppointmentData({...appointmentData, creator: e.target.value})}
                />

                <TextField  
                name='memberEmail' 
                variant='outlined' 
                label='email'
                fullWidth
                value={appointmentData.creator}
                onChange={(e) => setAppointmentData({...appointmentData, creator: e.target.value})}
                />
                
                <TextField  
                name='memberEmail' 
                variant='outlined' 
                label='email'
                fullWidth
                value={appointmentData.creator}
                onChange={(e) => setAppointmentData({...appointmentData, creator: e.target.value})}
                />

                <TextField  
                name='memberEmail' 
                variant='outlined' 
                label='email'
                fullWidth
                value={appointmentData.creator}
                onChange={(e) => setAppointmentData({...appointmentData, creator: e.target.value})}
                />

            </form>
        </Paper>
    )
}

export default Form