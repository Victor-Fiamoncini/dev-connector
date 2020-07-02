import ProfileTypes from './types'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'
import AlertTypes from '../alert/types'
import SessionTypes from '../session/types'

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
			payload: { message: 'Failed to add a profile', type: 'danger' },
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
			payload: { message: 'Failed to add experience', type: 'danger' },
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
			payload: { message: 'Failed to add education', type: 'danger' },
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

export function* asyncDestroyExperience({ payload }) {
	const { id } = payload

	try {
		yield call(api.delete, `/profiles/experience/${id}`)

		yield put({ type: ProfileTypes.DESTROY_EXPERIENCE, payload: id })
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: { message: 'Experience deleted!', type: 'success' },
		})
	} catch (err) {
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: { message: 'Failed to delete experience', type: 'danger' },
		})
		yield put({
			type: ProfileTypes.DESTROY_EXPERIENCE_ERROR,
			payload: {
				message: err.response.data.error,
				status: err.response.status,
			},
		})
	}
}

export function* asyncDestroyEducation({ payload }) {
	const { id } = payload

	try {
		yield call(api.delete, `/profiles/education/${id}`)

		yield put({ type: ProfileTypes.DESTROY_EDUCATION, payload: id })
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: { message: 'Education deleted!', type: 'success' },
		})
	} catch (err) {
		yield put({
			type: AlertTypes.ASYNC_SET_ALERT,
			payload: { message: 'Failed to delete education', type: 'danger' },
		})
		yield put({
			type: ProfileTypes.DESTROY_EDUCATION_ERROR,
			payload: {
				message: err.response.data.error,
				status: err.response.status,
			},
		})
	}
}

export function* asyncDestroyAccount() {
	if (window.confirm('Are you sure? This can NOT be undone')) {
		try {
			yield call(api.delete, '/profiles')

			yield put({ type: ProfileTypes.CLEAR_PROFILE })
			yield put({ type: SessionTypes.USER_LOGOUT })
			yield put({
				type: AlertTypes.ASYNC_SET_ALERT,
				payload: { message: 'Your account has been deleted', type: 'success' },
			})
		} catch (err) {
			yield put({
				type: AlertTypes.ASYNC_SET_ALERT,
				payload: { message: 'Failed to delete your account', type: 'danger' },
			})
		}
	}
}

export default function* root() {
	yield all([
		takeLatest(ProfileTypes.ASYNC_GET_PROFILE, asyncGetProfile),
		takeLatest(ProfileTypes.ASYNC_STORE_PROFILE, asyncStoreOrUpdateProfile),
		takeLatest(ProfileTypes.ASYNC_STORE_EXPERIENCE, asyncStoreExperience),
		takeLatest(ProfileTypes.ASYNC_STORE_EDUCATION, asyncStoreEducation),
		takeLatest(ProfileTypes.ASYNC_DESTROY_EXPERIENCE, asyncDestroyExperience),
		takeLatest(ProfileTypes.ASYNC_DESTROY_EDUCATION, asyncDestroyEducation),
		takeLatest(ProfileTypes.ASYNC_DESTROY_ACCOUNT, asyncDestroyAccount),
	])
}
