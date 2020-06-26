import initialState from './state'
import Types from './types'

import { getToken, setToken, removeToken } from '../../../utils/token'

export default function reducer(state = initialState, action) {
	const { payload, type } = action

	switch (type) {
		case Types.USER_STORE:
			setToken(payload.token)

			return {
				...state,
				user: payload.user,
				token: getToken(),
				loading: false,
				errors: [],
			}

		case Types.USER_STORE_ERROR:
			removeToken()

			return {
				...state,
				user: {},
				token: null,
				isAuthenticated: false,
				loading: false,
				errors: payload,
			}

		default:
			return initialState
	}
}
