import initialState from './state'
import ProfileTypes from './types'

export default (state = initialState, { payload, type }) => {
	switch (type) {
		case ProfileTypes.GET_PROFILE:
		case ProfileTypes.STORE_PROFILE:
		case ProfileTypes.STORE_EXPERIENCE:
		case ProfileTypes.STORE_EDUCATION:
			return {
				...state,
				profile: payload,
				loading: false,
			}

		case ProfileTypes.GET_PROFILE_ERROR:
		case ProfileTypes.STORE_PROFILE_ERROR:
		case ProfileTypes.STORE_EXPERIENCE_ERROR:
		case ProfileTypes.STORE_EDUCATION_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			}

		case ProfileTypes.CLEAR_PROFILE:
			return {
				...state,
				profile: null,
				repos: [],
				loading: false,
			}

		case ProfileTypes.SET_LOADING:
			return {
				...state,
				loading: true,
			}

		default:
			return state
	}
}
