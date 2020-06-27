import SessionTypes from './types'

export const userStore = (name, email, password) => ({
	type: SessionTypes.ASYNC_USER_STORE,
	payload: {
		name,
		email,
		password,
	},
})

export const loadSession = () => ({
	type: SessionTypes.ASYNC_LOAD_SESSION,
})

export const userLogin = (email, password) => ({
	type: SessionTypes.ASYNC_USER_LOGIN,
	payload: {
		email,
		password,
	},
})

export const userLogout = () => ({
	type: SessionTypes.ASYNC_USER_LOGOUT,
})
