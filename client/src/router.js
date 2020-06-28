import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import PrivateRoute from './components/utils/PrivateRoute'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Dashboard from './components/pages/Dashboard'
import CreateProfile from './components/pages/CreateProfile'

export default function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute exact path="/create-profile" component={CreateProfile} />
			</Switch>
		</BrowserRouter>
	)
}
