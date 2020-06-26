import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Login from './components/pages/Login'

export default function Router() {
	return (
		<BrowserRouter>
			<Route path="/" component={Login} />
		</BrowserRouter>
	)
}
