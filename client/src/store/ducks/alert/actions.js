import AlertTypes from './types'

export const setAlert = (message, type) => ({
	type: AlertTypes.ASYNC_SET_ALERT,
	payload: {
		message,
		type,
	},
})
