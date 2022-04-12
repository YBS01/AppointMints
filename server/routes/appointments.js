import express from 'express'

import { getAppointments, createAppointment, updateAppointment, deleteAppointment, employeeAvailable } from '../controllers/appointments.js'

const router = express.Router()

router.get('/', getAppointments)
router.post('/', createAppointment)
router.patch('/:id', updateAppointment)
router.delete('/:id', deleteAppointment)
router.patch('/:id/employeeAvailable', employeeAvailable)

export default router