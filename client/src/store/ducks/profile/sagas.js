import SessionTypes from './types'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'

export function* asyncGetProfile() {
	try {
		const { data } = yield call(api.get, '/profiles/user/me')

		yield put({
			type: SessionTypes.GET_PROFILE,
			payload: data,
		})
	} catch (err) {
		yield put({
			type: SessionTypes.GET_PROFILE_ERROR,
			payload: {
				message: err.response.data.error,
				status: err.response.status,
			},
		})
	}
}

export default function* root() {
	yield all([takeLatest(SessionTypes.ASYNC_GET_PROFILE, asyncGetProfile)])
}
