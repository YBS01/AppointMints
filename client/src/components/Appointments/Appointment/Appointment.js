import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, } from '@material-ui/core'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import EventAvailableTwoToneIcon from '@material-ui/icons/EventAvailableTwoTone'
import EventBusy from '@material-ui/icons/EventBusy'
import DeleteIcon from '@material-ui/icons/Delete'
import EventBusyIcon from'@material-ui/icons/EventBusy'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import { deleteAppointment, employeeAvailable } from '../../../actions/appointments'
import Appointments from '../Appointments'

const Appointment = ({ appointment, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    
    const user = JSON.parse(localStorage.getItem('profile'))

    const Availability = () => {
        if (appointment.available.length > 0) {
          return appointment.available.find((available) => available === (user?.result?.googleId || user?.result?._id))
            ? (
              <><EventAvailableIcon fontSize="small" />&nbsp;{appointment.available.length > 2 ? `You and ${appointment.available.length - 1} others` : `you are available ${appointment.available.length > 1 ? ' and 1 other' : ''}` }</>
            ) : (
              <><EventAvailableTwoToneIcon fontSize="small" />&nbsp;{appointment.available.length} {appointment.available.length === 1 ? 'person is available' : 'persons are available'}</>
            );
        }
    
        return <><EventBusyIcon fontSize="small" />&nbsp;No one is available</>;
      };

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
                    <Button size='small' color='primary' disabled={!user?.result} onClick={() => dispatch(employeeAvailable(appointment._id)) }>
                       <Availability/>
                    </Button>

                    {(user?.resut?.googleId === appointment?.employee || user?.result?._id === appointment?.employee) && (

                    <Button size='small' color='primary' onClick={() => dispatch(deleteAppointment(appointment._id)) }>
                        <DeleteIcon fontSize='small' />
                        Cancel
                    </Button>
                    )} 


                    {/* <Button size='small' color='primary' onClick={() => dispatch(deleteAppointment(appointment._id)) }>
                        <DeleteIcon fontSize='small' />
                        Cancel
                    </Button> */}
                </CardActions>
        </Card>
    )
}

export default Appointment