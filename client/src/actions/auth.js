import { AUTH } from '../constants/actionTypes'
import * as api from '../api'

//moved to components/Auth import { useNavigate } from 'react-router-dom'


export const signin = (formData) => async (dispatch) => {
//moved to components/Auth     const navigate = useNavigate()

    try {
        // log in user ...
        const { data } = await api.signIn(formData)
        dispatch({ type: AUTH, data })

//moved to components/Auth         navigate('/')

    } catch (error) {
        console.log(error)
    }
    window.location.reload(false)
}


export const signup = (formData) => async (dispatch) => {
//moved to components/Auth     const navigate = useNavigate()

    try {

        // sign up user ...
        const { data }= await api.signUp(formData)
        dispatch({ type: AUTH, data })

//moved to components/Auth         navigate('/')

    } catch (error) {
        console.log(error)
    }
}