import React, {useState} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useEffect} from 'react'

import { getAppointments } from './actions/appointments'
import Appointments from './components/Appointments/Appointments'
import Form from './components/Form/Form'
import appointmints from './images/appointmints.png'
import useStyles from './styles'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAppointments())
    }, [currentId, dispatch])

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>AppointMints</Typography>
                <img className={classes.image} src={appointmints} alt='AppointMints' height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Appointments setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>            
        </Container>
    )
}

export default App