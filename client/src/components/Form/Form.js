import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import Filebase from 'react-file-base64'
import { useDispatch } from 'react-redux'

import useStyles from './styles'
//import { createAppointment } from '../../api'
import { createAppointment } from '../../actions/appointments'

const Form = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [appointmentData, setAppointmentData] = useState({
        memberTitle: '', memberName: '', memberEmail: '', appointmentDate: '', appointmentDescription: '' })

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createAppointment(appointmentData))
    }

    const clear = () => {

    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className= {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Book an Appointment</Typography>

                <TextField  
                name='memberTitle' 
                variant='outlined' 
                label='Title eg. Mr Mrs'
                fullWidth //try to put on same line as next element
                value={appointmentData.memberTitle}
                onChange={(e) => setAppointmentData({...appointmentData, memberTitle: e.target.value})}
                />

                <TextField  
                name='memberName' 
                variant='outlined' 
                label='Name'
                fullWidth //try to put on same line as previous element
                value={appointmentData.memberName}
                onChange={(e) => setAppointmentData({...appointmentData, memberName: e.target.value})}
                />

                <TextField  
                name='memberEmail' 
                variant='outlined' 
                label='Email'
                fullWidth
                value={appointmentData.memberEmail}
                onChange={(e) => setAppointmentData({...appointmentData, memberEmail: e.target.value})}
                />

                <TextField  
                name='appointmentDate' 
                variant='outlined' 
                label='Appointment Date'
                fullWidth
                value={appointmentData.appointmentDate}
                onChange={(e) => setAppointmentData({...appointmentData, appointmentDate: e.target.value})}
                />

                <TextField  
                name='appointmentDescription' 
                variant='outlined' 
                label='Appoint Description'
                fullWidth
                value={appointmentData.appointmentDescription}
                onChange={(e) => setAppointmentData({...appointmentData, appointmentDescription: e.target.value})}
                />

                <div className={classes.fileInput}>
                    <Filebase 
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setAppointmentData ({...appointmentData, selectedFile: base64})}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                {/*<Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>*/}

            </form>
        </Paper>
    )
}

export default Form