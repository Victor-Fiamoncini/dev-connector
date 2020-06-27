import { all, fork } from 'redux-saga/effects'

import alert from './alert/sagas'
import session from './session/sagas'

export default function* rootSaga() {
	yield all([fork(alert), fork(session)])
}
