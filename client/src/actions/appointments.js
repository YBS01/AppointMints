import *as api from '../api'

//Action Creators

export const getAppointments = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAppointments()

        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

