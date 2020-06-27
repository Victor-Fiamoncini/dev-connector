import initialState from './state'
import ProfileTypes from './types'

export default (state = initialState, { payload, type }) => {
	switch (type) {
		case ProfileTypes.GET_PROFILE:
			return {
				...state,
				profile: payload,
				loading: false,
			}

		case ProfileTypes.GET_PROFILE_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			}

		default:
			return state
	}
}
