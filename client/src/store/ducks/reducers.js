import { combineReducers } from 'redux'

import alert from './alert'
import session from './session'

export default combineReducers({
	alert,
	session,
})
