import Types from './types'
import { all, put, take } from 'redux-saga/effects'

import { v4 as uuid } from 'uuid'

export function* asyncSetAlert({ payload }) {
	const { message, type } = payload
	const id = uuid('alert')

	yield put({
		type: Types.SET_ALERT,
		payload: { id, message, type },
	})
}

export default function* root() {
	yield all([take(Types.ASYNC_SET_ALERT, asyncSetAlert)])
}
