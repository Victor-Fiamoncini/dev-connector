import ProfileTypes from './types'

export const getProfile = () => ({ type: ProfileTypes.ASYNC_GET_PROFILE })

export const storeOrUpdateProfile = (formData, history) => ({
	type: ProfileTypes.ASYNC_STORE_PROFILE,
	payload: {
		formData,
		history,
	},
})

export const storeExperience = (formData, history) => ({
	type: ProfileTypes.ASYNC_STORE_EXPERIENCE,
	payload: {
		formData,
		history,
	},
})
