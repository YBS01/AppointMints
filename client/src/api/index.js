import axios from 'axios'

const url = 'http://localhost:5000/appointments'

export const fetchAppointments = () => axios.get(url)
export const createAppointment = (newAppointment) => axios.post(url, newAppointment)
export const updateAppointment = (id, updatedAppointment) => axios.patch(`${url}/${id}`, updatedAppointment)