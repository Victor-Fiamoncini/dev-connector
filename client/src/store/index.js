import createSaga from 'redux-saga'
import { applyMiddleware, compose, createStore } from 'redux'

import sagas from './ducks/sagas'
import reducers from './ducks/reducers'

const sagaMiddleware = createSaga()
const devtoolsExtension =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(
	reducers,
	compose(
		applyMiddleware(sagaMiddleware),
		process.env.NODE_ENV === 'development' ? devtoolsExtension : ''
	)
)

sagaMiddleware.run(sagas)
