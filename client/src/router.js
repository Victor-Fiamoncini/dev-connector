import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import PrivateRoute from './components/utils/PrivateRoute'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Home from './components/pages/Home'

export default function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<PrivateRoute exact path="/home" component={Home} />
			</Switch>
		</BrowserRouter>
	)
}
