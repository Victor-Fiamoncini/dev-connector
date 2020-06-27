import Types from './types'

export const userStore = (name, email, password) => ({
	type: Types.ASYNC_USER_STORE,
	payload: {
		name,
		email,
		password,
	},
})
