import Types from './types'

export const setAlert = (message, type) => ({
	type: Types.ASYNC_SET_ALERT,
	payload: {
		message,
		type,
	},
})
