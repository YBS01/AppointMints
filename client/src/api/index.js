import axios from 'axios'

const API = axios.create({ baseURL: 'https://appointmints-app.herokuapp.com' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    } 
    
    return req
})

export const fetchAppointments = () => API.get('/appointments')
export const createAppointment = (newAppointment) => API.post('/appointments', newAppointment)
export const updateAppointment = (id, updatedAppointment) => API.patch(`/appointments/${id}`, updatedAppointment)
export const deleteAppointment = (id) => API.delete(`/appointments/${id}`)
export const employeeAvailable = (id) => API.patch(`/appointments/${id}/employeeAvailable`)

export const signIn = (formData) => API.post('/user/signin', formData) 
export const signUp = (formData) => API.post('/user/signup', formData)
