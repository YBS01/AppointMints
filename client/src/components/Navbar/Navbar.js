import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'
import appointmints from '../../images/appointmints.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import decode from 'jwt-decode'

const Navbar = () => {
    const classes = useStyles()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    
    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token

        // JWT

        if (token) {
            const decodedToken = decode(token)

            if(decodedToken.exp * 1000 < new Date().getTime()) logout()
        } else {
            
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

  return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography componenet={Link} to='/' className={classes.heading} variant='h2' align='center'>AppointMints</Typography>
                <img className={classes.image} src={appointmints} alt='AppointMints' height='60'/>                
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)} </Avatar>
                        <Typography className={classes.userName} variant='h6'> {user.result.name}  &nbsp;
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout} >
                        Logout
                        </Button>
                        </Typography>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained'color='primary' >Sign In</Button>
                )}
            </Toolbar>
            </AppBar>
  )
}

export default Navbar