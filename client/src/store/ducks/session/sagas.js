import SessionTypes from './types'
import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'

import * as auth from '../../../utils/token'
import api from '../../../services/api'

import AlertTypes from '../alert/types'
import ProfileTypes from '../profile/types'

export function* asyncUserStore({ payload }) {
	const { name, email, password } = payload

	try {
		const { data } = yield call(api.post, '/users', { name, email, password })

		yield put({
			type: SessionTypes.USER_STORE,
			payload: {
				token: data.token,
				user: data.user,
			},
		})
	} catch (err) {
		yield put({ type: SessionTypes.USER_STORE_ERROR })
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: {
				message: err.response.data.error,
				type: 'danger',
			},
		})
	}
}

export function* asyncUserLogin({ payload }) {
	const { email, password } = payload

	try {
		const { data } = yield call(api.post, '/sessions', { email, password })

		yield put({
			type: SessionTypes.USER_LOGIN,
			payload: {
				token: data.token,
				user: data.user,
			},
		})
	} catch (err) {
		yield put({ type: SessionTypes.USER_LOGIN_ERROR })
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: {
				message: err.response.data.error,
				type: 'danger',
			},
		})
	}
}

export function* asyncLoadSession() {
	const token = auth.getToken()

	if (token) {
		auth.setToken(token)

		try {
			const { data } = yield call(api.get, '/sessions')

			yield put({
				type: SessionTypes.LOAD_SESSION,
				payload: data,
			})
		} catch (err) {
			yield put({ type: SessionTypes.LOAD_SESSION_ERROR })
		}
	} else {
		yield put({ type: SessionTypes.LOAD_SESSION_ERROR })
	}
}

export function* asyncUserLogout() {
	yield put({ type: ProfileTypes.CLEAR_PROFILE })
	yield put({ type: SessionTypes.USER_LOGOUT })
}

export default function* root() {
	yield all([
		takeLatest(SessionTypes.ASYNC_USER_STORE, asyncUserStore),
		takeEvery(SessionTypes.ASYNC_LOAD_SESSION, asyncLoadSession),
		takeLatest(SessionTypes.ASYNC_USER_LOGIN, asyncUserLogin),
		takeEvery(SessionTypes.ASYNC_USER_LOGOUT, asyncUserLogout),
	])
}
