import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchAppointments = () => API.get('/appointments')
export const createAppointment = (newAppointment) => API.post('/appointments', newAppointment)
export const updateAppointment = (id, updatedAppointment) => API.patch(`/appointments/${id}`, updatedAppointment)
export const deleteAppointment = (id) => API.delete(`/appointments/${id}`)
export const employeeAvailable = (id) => API.patch(`/appointments/${id}/employeeAvailable`)

export const signIn = (formData) => API.post('/user/signin', formData) 
export const signUp = (formData) => API.post('/user/signup', formData)
