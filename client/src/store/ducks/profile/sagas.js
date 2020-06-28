import ProfileTypes from './types'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'

import AlertTypes from '../alert/types'

export function* asyncGetProfile() {
	yield put({ type: ProfileTypes.SET_LOADING })

	try {
		const { data } = yield call(api.get, '/profiles/user/me')

		yield put({
			type: ProfileTypes.GET_PROFILE,
			payload: data,
		})
	} catch (err) {
		yield put({
			type: ProfileTypes.GET_PROFILE_ERROR,
			payload: {
				message: err.response.data.error,
				status: err.response.status,
			},
		})
	}
}

export function* asyncStoreProfile({ payload }) {
	const { formData, history } = payload

	try {
		const { data } = yield call(api.post, '/profiles', formData)

		yield put({
			type: ProfileTypes.GET_PROFILE,
			payload: data,
		})
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: {
				message: 'Profile saved!',
				type: 'success',
			},
		})

		console.log(data)

		history.push('/dashboard')
	} catch (err) {
		console.log(err.response)

		yield put({
			type: ProfileTypes.STORE_PROFILE_ERROR,
			payload: {
				message: err.response.data.error,
				status: err.response.status,
			},
		})
	}
}

export default function* root() {
	yield all([
		takeLatest(ProfileTypes.ASYNC_GET_PROFILE, asyncGetProfile),
		takeLatest(ProfileTypes.ASYNC_STORE_PROFILE, asyncStoreProfile),
	])
}
