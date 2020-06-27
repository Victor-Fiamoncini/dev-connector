import Types from './types'
import { all, delay, put, takeEvery } from 'redux-saga/effects'

import { v4 as uuid } from 'uuid'

export function* asyncSetAlert({ payload }) {
	const { message, type } = payload
	const id = uuid()

	yield put({
		type: Types.SET_ALERT,
		payload: { id, message, type },
	})

	yield delay(5000)
	yield put({ type: Types.REMOVE_ALERT, payload: id })
}

export default function* root() {
	yield all([takeEvery(Types.ASYNC_SET_ALERT, asyncSetAlert)])
}
