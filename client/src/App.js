import React, {useState} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useEffect} from 'react'

import { getAppointments } from './actions/appointments'
import Appointments from './components/Appointments/Appointments'
import Form from './components/Form/Form'
import useStyles from './styles'
import Navbar from './components/Navbar/Navbar'


const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAppointments())
    }, [currentId, dispatch])

    return (
        <Container maxWidth='lg'>
            <Navbar />
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={4}>
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