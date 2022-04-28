import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, GridListTile  } from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import Input from './input'
import { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import Icon from './icon'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signin, signup } from '../../actions/auth'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles()

    const [showPassword, setShowPassword] = useState(false)

    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData))
            navigate('/') //moved from actions/auth
        } else {
            dispatch(signin(formData))
            navigate('/') //moved from actions/auth
        }

        navigate('/') //moved from actions/auth
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup )
        setShowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({ type: 'AUTH', data: { result, token} })
            navigate('/') //=== history.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log('Google Sign In was unsuccessful')
    }


  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}  >
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5' > {isSignup ? 'Sign Up' : 'Sign In' }</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>                            
                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                            
                                <Input name='lastName' label='First Name' handleChange={handleChange} half/>                            
                            </>
                        )
                    }
                    <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                    <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}> 
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <GoogleLogin 
                        clientId='980243985638-h5g1kut3mkcf7otk877hfts0aj0m8aoq.apps.googleusercontent.com'
                        render={(renderProps) => 
                            <Button 
                            className={classes.googleButton} 
                            color='primary' 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            startIcon={<Icon />} variant='contained' >Google Sign In </Button>
                        } 
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                        />
                        <Button onClick={switchMode} >
                            { isSignup ? 'Already have an account? Sign In' : 'Dont have an account? Sign Up'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>

    </Container>
  )
}

export default Auth