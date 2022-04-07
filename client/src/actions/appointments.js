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