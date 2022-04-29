import React from 'react'
import { Grid, CircularProgress, Paper, Typography } from '@material-ui/core'
import Appointment from './Appointment/Appointment'
import { useSelector } from 'react-redux'

import useStyles from './styles'

const Appointments = ({ setCurrentId }) => {
    const appointments = useSelector((state) => state.appointments)
    const classes = useStyles()
    
    //FOR NEW
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        
        (!appointments.length ? 
        
            <Grid> 
                <CircularProgress/>
                !user?.result?.name ? (
            <Paper className={classes.paper}>
                <Typography variant='h6' align='center'>
                    Employees must login to view booked appointments
                </Typography>
            </Paper>
        ) : <Typography></Typography>
            
            </Grid>
        : (
            

            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                
        
                {appointments.map((appointment) => (
                        <Grid key={appointment._id} item xs={12} sm={6}>
                            <Appointment appointment={appointment} setCurrentId={setCurrentId} />
                        </Grid>
                ))}
            </Grid>
        ))
    )
}

export default Appointments