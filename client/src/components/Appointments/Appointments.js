import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import Appointment from './Appointment/Appointment'
import { useSelector } from 'react-redux'

import useStyles from './styles'

const Appointments = ({ setCurrentId }) => {
    const appointments = useSelector((state) => state.appointments)
    const classes = useStyles()

    return (
        !appointments.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {appointments.map((appointment) => (
                        <Grid key={appointment._id} item xs={12} sm={6}>
                            <Appointment appointment={appointment} setCurrentId={setCurrentId} />
                        </Grid>
                ))}
            </Grid>
        )
    )
}

export default Appointments