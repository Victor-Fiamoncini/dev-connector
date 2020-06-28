import ProfileTypes from './types'

export const getProfile = () => ({ type: ProfileTypes.ASYNC_GET_PROFILE })

export const storeProfile = (formData, history) => ({
	type: ProfileTypes.ASYNC_STORE_PROFILE,
	payload: {
		formData,
		history,
	},
})
