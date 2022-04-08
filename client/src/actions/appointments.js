import * as api from '../api'

//Action Creators
export const getAppointments = () => async (dispatch) => {
    const action = { type: 'FETCH_ALL', payload: []}
    
    try {
        const { data } = await api.fetchAppointments()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createAppointment = (appointment) => async (dispatch) => {

    try {
        const { data } = await api.createAppointment(appointment)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateAppointment = (id, appointment) => async (dispatch) => {
    try {
        const { data } = await api.updateAppointment(id, appointment)
        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}