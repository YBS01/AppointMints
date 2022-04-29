import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper} from '@material-ui/core'
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

const options = ['Jane Doe', 'John Doe', 'Janet Doe', 
'Justin Case', 'April May']

const Form = ({ currentId, setCurrentId }) => {
    
    const [appointmentData, setAppointmentData] = useState({
        memberTitle: '', memberName: '', memberEmail: '', appointmentDate: new Date(), appointmentDescription: '' })
        
        const appointment = useSelector((state) => currentId ? state.appointments.find((p) => p._id === currentId) : null)        
        const classes = useStyles()
        const dispatch = useDispatch()

        useEffect(() => {
            if(appointment) setAppointmentData(appointment);
        }, [appointment] )

    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId) {
            dispatch(updateAppointment(currentId, appointmentData))
        } else {
            dispatch(createAppointment(appointmentData))
        }

        clear()
    }

    const clear = () => {
        setCurrentId(null)
        setAppointmentData({memberTitle: '', memberName: '', memberEmail: '', appointmentDate: '', appointmentDescription: '' })
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className= {`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'> {currentId ? 'Editing' : 'Book'} Appointment </Typography>
                

                <div className={classes.autocomplete}>
      <Autocomplete fullWidth
        options={options}
        renderInput={(params) =>
          <TextField {...params} label="Employee" variant="outlined" />}
      />
    </div>        

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
                format="DD-MM-yyyy-HH"
                value={appointmentData.appointmentDate}
                onChange={(e) => setAppointmentData({...appointmentData, appointmentDate: e.target.value})}
                />

                <TextField  
                name='appointmentDescription' 
                variant='outlined' 
                label='Appointment Description'
                fullWidth
                value={appointmentData.appointmentDescription}
                onChange={(e) => setAppointmentData({...appointmentData, appointmentDescription: e.target.value})}
                />


                {/* <MuiPickersUtilsProvider utils={DateMomentUtils}>
                    <KeyboardDateTimePicker  
                    name='appointmentDate' 
                    disablePast
                    format="DD-MM-yyyy-HH"
                    //ampm={false}
                    minutesStep={60}
                    views={["date", "hours"]}
                    disableToolbar
                    id="date-picker-dialog"
                    error={false}
                    helperText={'Ensure appointment is within operating hours'}
                    value={appointmentData.appointmentDate}
                    autoOk={true}
                    onChange={(e) => setAppointmentData({...appointmentData, appointmentDate: e.target.value})}
                    />
                </MuiPickersUtilsProvider> */}

{/* <KeyboardDateTimePicker
        //variant="inline"
        //ampm={false}
        //label="appointmentDate"
        //value={appointmentData.appointmentDate}
        onChange={(e) => setAppointmentData({...appointmentData, appointmentDate: e.target.value})}
        //onError={console.log}
        //disablePast
        //format="yyyy/MM/dd HH:mm"
      /> */}
    

                {/*<TextField name='tags' variant='outlined' label='Tags' fullWidth value={appointmentData.tags} onChange={(e) => setAppointmentData({...appointmentData, tags: e.target.value.split(',') })}>

                </TextField>*/}

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