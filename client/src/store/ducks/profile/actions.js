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

export const storeEducation = (formData, history) => ({
	type: ProfileTypes.ASYNC_STORE_EDUCATION,
	payload: {
		formData,
		history,
	},
})

export const destroyExperience = id => ({
	type: ProfileTypes.ASYNC_DESTROY_EXPERIENCE,
	payload: {
		id,
	},
})

export const destroyEducation = id => ({
	type: ProfileTypes.ASYNC_DESTROY_EDUCATION,
	payload: {
		id,
	},
})

export const destroyAccount = () => ({
	type: ProfileTypes.ASYNC_DESTROY_ACCOUNT,
})
