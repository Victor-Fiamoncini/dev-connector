import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaCode, FaSignOutAlt, FaUser } from 'react-icons/fa'

import { userLogout } from '../../../store/ducks/session/actions'

export default function Navbar() {
	const dispatch = useDispatch()
	const { isAuthenticated, loading } = useSelector(state => state.session)

	function handleLogoutClick() {
		dispatch(userLogout())
	}

	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to={isAuthenticated ? '/home' : '/'} className="icon-link">
					<FaCode /> DevConnector
				</Link>
			</h1>
			{!loading && (
				<>
					{isAuthenticated ? (
						<ul>
							<li>
								<Link to="/home" className="icon-link">
									<FaUser />
									<span className="hide-sm">Dashboard</span>
								</Link>
							</li>
							<li>
								<Link to="/" className="icon-link" onClick={handleLogoutClick}>
									<FaSignOutAlt />
									<span className="hide-sm">Logout</span>
								</Link>
							</li>
						</ul>
					) : (
						<ul>
							<Link to="/">Developers</Link>
							<Link to="/register">Register</Link>
							<Link to="/login">Login</Link>
						</ul>
					)}
				</>
			)}
		</nav>
	)
}
