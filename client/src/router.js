import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import PrivateRoute from './components/utils/PrivateRoute'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Dashboard from './components/pages/Dashboard'
import CreateProfile from './components/pages/CreateProfile'
import EditProfile from './components/pages/EditProfile'
import AddExperience from './components/pages/AddExperience'

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
				<PrivateRoute exact path="/edit-profile" component={EditProfile} />
				<PrivateRoute exact path="/add-experience" component={AddExperience} />
			</Switch>
		</BrowserRouter>
	)
}
