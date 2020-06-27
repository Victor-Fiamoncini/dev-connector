import initialState from './state'
import AlertTypes from './types'

export default function reducer(state = initialState, { payload, type }) {
	switch (type) {
		case AlertTypes.SET_ALERT:
			return {
				...state,
				alerts: [...state.alerts, payload],
			}

		case AlertTypes.REMOVE_ALERT:
			return {
				...state,
				alerts: state.alerts.filter(alert => alert.id !== payload),
			}

		default:
			return state
	}
}
