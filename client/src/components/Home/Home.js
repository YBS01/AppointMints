import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Appointments from '../Appointments/Appointments'
import Form from '../Form/Form'
import { useDispatch } from 'react-redux'
import { getAppointments } from '../../actions/appointments'
import { useState, useEffect } from 'react'


const Home = () => {

    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAppointments())
    }, [currentId, dispatch])

  return (
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
  )
}

export default Home