import ProfileTypes from './types'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import AlertTypes from '../alert/types'

export function* asyncGetProfile() {
	yield put({ type: ProfileTypes.SET_LOADING })

	try {
		const { data } = yield call(api.get, '/profiles/user/me')

		if (data.skills.length > 0) {
			data.skills = data.skills.join(', ')
		} else {
			data.skills = ''
		}

		yield put({ type: ProfileTypes.GET_PROFILE, payload: data })
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

export function* asyncStoreOrUpdateProfile({ payload }) {
	const { formData, history } = payload

	try {
		const { data } = yield call(api.post, '/profiles', formData)

		yield put({ type: ProfileTypes.STORE_PROFILE, payload: data })
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: { message: 'Profile saved!', type: 'success' },
		})

		history.push('/dashboard')
	} catch (err) {
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: { message: err.response.data.error, type: 'danger' },
		})
		yield put({
			type: ProfileTypes.STORE_PROFILE_ERROR,
			payload: {
				message: err.response.data.error,
				status: err.response.status,
			},
		})
	}
}

export function* asyncStoreExperience({ payload }) {
	const { formData, history } = payload

	yield console.log(formData)

	try {
		const { data } = yield call(api.put, '/profiles/experience', formData)

		yield put({ type: ProfileTypes.STORE_EXPERIENCE, payload: data })
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: { message: 'Experience saved!', type: 'success' },
		})

		history.push('/dashboard')
	} catch (err) {
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: { message: err.response.data.error, type: 'danger' },
		})
		yield put({
			type: ProfileTypes.STORE_EXPERIENCE_ERROR,
			payload: {
				message: err.response.data.error,
				status: err.response.status,
			},
		})
	}
}

export function* asyncStoreEducation({ payload }) {
	const { formData, history } = payload

	try {
		const { data } = yield call(api.put, '/profiles/education', formData)

		yield put({ type: ProfileTypes.STORE_EDUCATION, payload: data })
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: { message: 'Education saved!', type: 'success' },
		})

		history.push('/dashboard')
	} catch (err) {
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: { message: err.response.data.error, type: 'danger' },
		})
		yield put({
			type: ProfileTypes.STORE_EDUCATION_ERROR,
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
		takeLatest(ProfileTypes.ASYNC_STORE_PROFILE, asyncStoreOrUpdateProfile),
		takeLatest(ProfileTypes.ASYNC_STORE_EXPERIENCE, asyncStoreExperience),
		takeLatest(ProfileTypes.ASYNC_STORE_EDUCATION, asyncStoreEducation),
	])
}
