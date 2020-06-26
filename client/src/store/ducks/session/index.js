import initialState from './state'
import Types from './types'

export default function reducer(state = initialState, action) {
	const { payload, type } = action

	switch (type) {
		case Types.USER_STORE:
			localStorage.setItem('auth_token', payload.token)

			return {
				...state,
				user: payload.user,
				token: localStorage.getItem('auth_token'),
				loading: false,
				errors: [],
			}

		case Types.USER_STORE_ERROR:
			localStorage.removeItem('auth_token')

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
