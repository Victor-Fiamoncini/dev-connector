import Types from './types'
import { all, call, put, take, takeLatest, takeEvery } from 'redux-saga/effects'

export function* asyncUserStore(action) {
	try {
		yield put({ type: Types.USER_STORE, payload: action.payload })
	} catch (err) {
		console.log(err)
	}
}

export default function* root() {
	yield all([takeLatest(Types.ASYNC_USER_STORE, asyncUserStore)])
}
