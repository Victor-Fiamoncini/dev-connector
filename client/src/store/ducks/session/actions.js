import Types from './types'

export default {
	userStore: (name, email, password) => ({
		type: Types.ASYNC_USER_STORE,
		payload: {
			name,
			email,
			password,
		},
	}),
}
