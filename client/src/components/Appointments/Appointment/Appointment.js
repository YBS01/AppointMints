import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import { deleteAppointment, employeeAvailable } from '../../../actions/appointments'

const Appointment = ({ appointment, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={appointment.selectedFile} title={appointment.memberTitle}/>
            <div className={classes.overlay}>   
                {/* <Typography variant='h6'>{appointment.memberEmail}</Typography> */}
                <Typography variant='h6'>{appointment.employee}</Typography>  {/* to use as creator*/}
                <Typography variant='body2'>{moment(appointment.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                style={{color: 'white'}} 
                size='small' 
                onClick={() => setCurrentId(appointment._id)}>
                    <MoreHorizIcon fontSize='medium'/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{appointment.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
                <Typography className={classes.title} variant='h5' gutterBottom>{appointment.memberTitle} {appointment.memberName}</Typography>
                <Typography className={classes.title} variant='h6' gutterBottom> { moment(appointment.appointmentDate).calendar() } </Typography>
                <CardContent>                    
                    <Typography variant='body2' color='textSecondary' component='p' >{appointment.appointmentDescription}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size='small' color='primary' onClick={() => dispatch(employeeAvailable(appointment._id)) }>
                        <ThumbUpAltIcon fontSize='small' />
                        Employee Available &nbsp;
                        {appointment.employeeAvailable}
                    </Button>
                    <Button size='small' color='primary' onClick={() => dispatch(deleteAppointment(appointment._id)) }>
                        <DeleteIcon fontSize='small' />
                        Delete
                    </Button>
                </CardActions>
        </Card>
    )
}

export default Appointment