import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'

import useStyles from './styles'

const Appointment = ({ appointment, setCurrentId }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={appointment.selectedFile} title={appointment.memberTitle}/>
            <div className={classes.overlay}>   
                <Typography variant='h6'>{appointment.memberEmail}</Typography>
                <Typography variant='body2'>{moment(appointment.createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.overlay2}>
                <Button 
                style={{color: 'white'}} 
                size='small' 
                onClick={() => setCurrentId(appointment._Id)}> {/*chech for curly vs regular*/}
                    <MoreHorizIcon fontSize='medium'/>
                </Button>
            </div>

            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{/*{appointment.tags.map((tag) => `#${tag} `)}*/} #hello, #hey</Typography>
            </div>
                <CardContent>                    
                    <Typography className={classes.title} variant='h5' gutterBottom>{appointment.appointmentDescription}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size='small' color='primary' onClick={() => {} }>
                        <ThumbUpAltIcon fontSize='small' />
                        Employee Available
                        {appointment.employeeAvailable}
                    </Button>
                    <Button size='small' color='primary' onClick={() => {} }>
                        <DeleteIcon fontSize='small' />
                        Delete
                    </Button>
                </CardActions>
        </Card>
    )
}

export default Appointment