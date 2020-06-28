import ProfileTypes from './types'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'

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

export default function* root() {
	yield all([takeLatest(ProfileTypes.ASYNC_GET_PROFILE, asyncGetProfile)])
}
