import express from 'express'

import { getAppointments, createAppointment, updateAppointment, deleteAppointment, employeeAvailable } from '../controllers/appointments.js'

import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', auth, getAppointments)
router.post('/', createAppointment)//no login needed
router.patch('/:id', auth, updateAppointment)// any logged in can update post
router.delete('/:id', auth, deleteAppointment)//delete button can remain for all loged in users
router.patch('/:id/employeeAvailable', auth, employeeAvailable)

export default router