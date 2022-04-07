import React from 'react'
import{ Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getAppointments } from './actions/appointments'
import Appointments from './components/Appointments/Appointments'
import Form from './components/Form/Form'
import appointments from './images/appointments.jpg'
import useStyles from './styles'
import { useEffect } from 'react'


const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch

    useEffect(() => {
        dispatch(getAppointments())
    }, [dispatch])

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant ='h2' align='center'>AppointMints</Typography>
                <img className={classes.image} src={appointments} alt='appointments' height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs ={12} sm={7}>
                            <Appointments />
                        </Grid>
                        <Grid item xs ={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App