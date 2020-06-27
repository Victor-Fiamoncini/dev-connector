import { combineReducers } from 'redux'

import alert from './alert'
import profile from './profile'
import session from './session'

export default combineReducers({
	alert,
	profile,
	session,
})
