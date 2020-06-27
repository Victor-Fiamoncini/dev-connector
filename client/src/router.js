import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'

export default function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<Route exact path="/" component={Landing} />
			<section className="container">
				<Switch>
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</section>
		</BrowserRouter>
	)
}
