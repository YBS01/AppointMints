import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import useStyles from './styles'
import appointmints from '../../images/appointmints.png'

const Navbar = () => {
    const classes = useStyles()

  return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>AppointMints</Typography>
                <img className={classes.image} src={appointmints} alt='AppointMints' height='60'/>
            </AppBar>
  )
}

export default Navbar