import Types from './types'

export default {
	userRegister: (name, email, password) => ({
		type: Types.ASYNC_USER_STORE,
		payload: {
			name,
			email,
			password,
		},
	}),
}
