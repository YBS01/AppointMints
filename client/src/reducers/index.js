import { combineReducers } from "redux"

import appointments from './appointments'
import auth from './auth'

export default combineReducers({  appointments, auth })

