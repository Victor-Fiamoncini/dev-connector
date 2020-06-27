import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Router from './router'
import store from './store'
import './assets/css/style.css'

import { loadSession } from './store/ducks/session/actions'

export default function App() {
	useEffect(() => {
		store.dispatch(loadSession())
	}, [])

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	)
}
