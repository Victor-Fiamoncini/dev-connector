import initialState from './state'
import Types from './types'

export default function reducer(state = initialState, { payload, type }) {
	switch (type) {
		case Types.SET_ALERT:
			return {
				...state,
				alerts: [...state.alerts, payload],
			}

		case Types.REMOVE_ALERT:
			return {
				...state,
				alerts: state.alerts.filter(alert => alert.id !== payload),
			}

		default:
			return state
	}
}
