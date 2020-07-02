import initialState from './state'
import ProfileTypes from './types'

export default (state = initialState, { payload, type }) => {
	switch (type) {
		case ProfileTypes.GET_PROFILE:
		case ProfileTypes.STORE_PROFILE:
			return {
				...state,
				profile: payload,
				loading: false,
			}

		case ProfileTypes.STORE_EXPERIENCE:
			return {
				...state,
				profile: {
					...state.profile,
					experience: [...state.profile.experience, payload],
				},
				loading: false,
			}

		case ProfileTypes.STORE_EDUCATION:
			return {
				...state,
				profile: {
					...state.profile,
					education: [...state.profile.education, payload],
				},
				loading: false,
			}

		case ProfileTypes.DESTROY_EXPERIENCE:
			return {
				...state,
				profile: {
					...state.profile,
					experience: state.profile.experience.filter(
						experience => experience._id !== payload
					),
				},
				loading: false,
			}

		case ProfileTypes.DESTROY_EDUCATION:
			return {
				...state,
				profile: {
					...state.profile,
					education: state.profile.education.filter(
						education => education._id !== payload
					),
				},
				loading: false,
			}

		case ProfileTypes.GET_PROFILES:
			return {
				...state,
				profiles: payload,
				loading: false,
			}

		case ProfileTypes.GET_REPOS:
			return {
				...state,
				repos: payload,
				loading: false,
			}

		case ProfileTypes.GET_PROFILE_ERROR:
		case ProfileTypes.STORE_PROFILE_ERROR:
		case ProfileTypes.STORE_EXPERIENCE_ERROR:
		case ProfileTypes.STORE_EDUCATION_ERROR:
		case ProfileTypes.DESTROY_EXPERIENCE_ERROR:
		case ProfileTypes.DESTROY_EDUCATION_ERROR:
		case ProfileTypes.DESTROY_ACCOUNT_ERROR:
		case ProfileTypes.GET_PROFILES_ERROR:
		case ProfileTypes.GET_REPOS_ERROR:
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
