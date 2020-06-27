import Types from './types'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'

export function* asyncUserStore({ payload }) {
	const { name, email, password } = payload

	try {
		const response = yield call(api.post, '/users', { name, email, password })

		console.log(response)

		yield put({
			type: Types.USER_STORE,
			payload: {
				token: response.data.token,
				user: response.data.user,
			},
		})
	} catch (err) {
		console.log(err)
		yield put({
			type: Types.USER_STORE_ERROR,
			payload: err.response.data.error,
		})
	}
}

export default function* root() {
	yield all([takeLatest(Types.ASYNC_USER_STORE, asyncUserStore)])
}
