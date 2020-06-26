import { all, fork } from 'redux-saga/effects'

import sessionSagas from './session/sagas'

export default function* rootSaga() {
	yield all([fork(sessionSagas)])
}
