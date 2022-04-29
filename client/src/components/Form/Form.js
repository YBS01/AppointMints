import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Filebase from 'react-file-base64'
import DateMomentUtils from '@date-io/moment'
import moment from 'moment'
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider
  } from '@material-ui/pickers'
import { useDispatch } from 'react-redux'


import useStyles from './styles'
import { useSelector } from 'react-redux'


//import { createAppointment } from '../../api'
import { createAppointment, updateAppointment } from '../../actions/appointments'
//import { updateAppointment } from '../../../../server/controllers/appointments'


const Form = ({ currentId, setCurrentId }) => {
    
    const [appointmentData, setAppointmentData] = useState({
        memberTitle: '', memberName: '', memberEmail: '', appointmentDate: new Date(), appointmentDescription: '' })
        
        const appointment = useSelector((state) => currentId ? state.appointments.find((p) => p._id === currentId) : null)        
        const classes = useStyles()
        const dispatch = useDispatch()

        //FOR NEW
        const user = JSON.parse(localStorage.getItem('profile'))

        useEffect(() => {
            if(appointment) setAppointmentData(appointment);
        }, [appointment] )

        // CHECK BACK FOR LOGIC

    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId) {
            dispatch(updateAppointment(currentId, appointmentData))
        } else {
            dispatch(createAppointment(appointmentData))
        }

        clear()
    }

    // NEW
    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     if(currentId === 0) {
    //         dispatch(createAppointment({ ...appointmentData, employee: user?.result?.employee }))
    //     } else {
    //         dispatch(updateAppointment(currentId, { ...appointmentData, employee: user?.result?.employee } ))
    //     }

    //     clear()
    // }


    if (!user?.result?.name) {
        <Paper className={classes.paper}>
            <Typography variant='h6' align='center'>
                Employees must login to view booked appointments
            </Typography>
        </Paper>
    }

    const clear = () => {
        setCurrentId(null)
        setAppointmentData({memberTitle: '', memberName: '', memberEmail: '', appointmentDate: new Date().getFullYear(), appointmentDescription: '' , employee: ''})
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' className= {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'> {currentId ? 'Editing' : 'Book'} Appointment </Typography>

                <FormControl fullWidth>


                <InputLabel id="demo-simple-select-label">Employee</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Employee" 
                    variant='outlined'
                    fullWidth
                    required
                    //className={classes.select}
                    value={appointmentData.employee}
                    onChange={(e) => setAppointmentData({...appointmentData, employee: e.target.value})}
                >
                    <MenuItem value={'April May'}>April May</MenuItem>
                    <MenuItem value={'Justin Case'}>Justin Case</MenuItem>
                    <MenuItem value={'Janet Doe'}>Janet Doe</MenuItem>
                </Select>
                </FormControl>

                
                <TextField  
                name='memberTitle' 
                variant='outlined' 
                label='Title eg. Mr Mrs'
                fullWidth //try to put on same line as next element
                required
                value={appointmentData.memberTitle}
                onChange={(e) => setAppointmentData({...appointmentData, memberTitle: e.target.value})}
                />

                <TextField  
                name='memberName' 
                variant='outlined' 
                label='Name'
                fullWidth //try to put on same line as previous element
                required
                value={appointmentData.memberName}
                onChange={(e) => setAppointmentData({...appointmentData, memberName: e.target.value})}
                />

                <TextField  
                name='memberEmail' 
                variant='outlined' 
                label='Email'
                fullWidth
                required
                value={appointmentData.memberEmail}
                onChange={(e) => setAppointmentData({...appointmentData, memberEmail: e.target.value})}
                />

                {/* <TextField  
                name='appointmentDate' 
                variant='outlined' 
                label='Appointment Date'
                fullWidth
                format="DD-MM-yyyy-HH"
                value={appointmentData.appointmentDate}
                onChange={(e) => setAppointmentData({...appointmentData, appointmentDate: e.target.value})}
                /> */}

                
                
                    {/* <TextField
                        label="Choose Time"
                        type="time"
                        step="3600"
                        //min="09:00" max="18:00"
                                                InputLabelProps={{
                        shrink: true,
                        }}
                        // 5 minutes
                        inputProps={{
                            min:"09:00",
                        step: 3600,
                        }}
                    /> */}
          
                <TextField  
                name='appointmentDate' 
                variant='outlined' 
                defaultValue="04:20"
                fullWidth
                required
                type={'datetime-local'}
                inputProps={{
                    min:"2022-04-28T08:00",
                    max:"2052-04-28T14:00",
                    step: 3600,
                    views: ["hours"],                                       
                }}
                value={appointmentData.appointmentDate}
                onChange={(e) => setAppointmentData({...appointmentData, appointmentDate: e.target.value})}
                />
     
                <TextField  
                name='appointmentDescription' 
                variant='outlined' 
                label='Appointment Description'
                fullWidth
                multiline 
                minRows={4}
                required
                value={appointmentData.appointmentDescription}
                onChange={(e) => setAppointmentData({...appointmentData, appointmentDescription: e.target.value})}
                />               



                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                {/*<Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>*/}

            </form>
        </Paper>
    )
}

export default Form