import * as api from '../api'

//Action Creators
export const getAppointments = () => async (dispatch) => {
    const action = { type: 'FETCH_ALL', payload: []}
    
    try {
        const { data } = await api.fetchAppointments()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createAppointment = (appointment) => async (dispatch) => {

    try {
        const { data } = await api.createAppointment(appointment)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateAppointment = (id, appointment) => async (dispatch) => {
    try {
        const { data } = await api.updateAppointment(id, appointment);
        dispatch({type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteAppointment = (id) => async (dispatch) => {
    try {
        await api.deleteAppointment(id)
        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const employeeAvailable = (id) => async (dispatch) => {
    try {
        const { data } = await api.employeeAvailable(id);
        dispatch({type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}