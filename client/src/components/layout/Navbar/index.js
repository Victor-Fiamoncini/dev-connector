import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode } from 'react-icons/fa'

import './style.scss'

export default function Navbar() {
	return (
		<nav className="navbar bg-dark">
			<h1 className="navbar-title">
				<Link to="/">
					<FaCode /> DevConnector
				</Link>
			</h1>
			<ul>
				<Link to="/">Developers</Link>
				<Link to="/register">Register</Link>
				<Link to="/login">Login</Link>
			</ul>
		</nav>
	)
}
