import initialState from './state'
import SessionTypes from './types'

import * as auth from '../../../utils/token'

export default (state = initialState, { payload, type }) => {
	switch (type) {
		case SessionTypes.USER_STORE:
		case SessionTypes.USER_LOGIN:
			auth.setToken(payload.token)

			return {
				...state,
				user: payload.user,
				token: auth.getToken(),
				isAuthenticated: true,
				loading: false,
			}

		case SessionTypes.LOAD_SESSION:
			return {
				...state,
				user: payload,
				token: auth.getToken(),
				isAuthenticated: true,
				loading: false,
			}

		case SessionTypes.USER_STORE_ERROR:
		case SessionTypes.LOAD_SESSION_ERROR:
		case SessionTypes.USER_LOGIN_ERROR:
		case SessionTypes.USER_LOGOUT:
			auth.removeToken()

			return {
				...state,
				user: {},
				token: null,
				isAuthenticated: false,
				loading: false,
			}

		default:
			return state
	}
}
