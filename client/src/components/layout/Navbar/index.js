import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	FaCode,
	FaSignOutAlt,
	FaSignInAlt,
	FaUser,
	FaUserPlus,
	FaUsers,
} from 'react-icons/fa'

import { userLogout } from '../../../store/ducks/session/actions'

export default function Navbar() {
	const dispatch = useDispatch()
	const { isAuthenticated, loading } = useSelector(state => state.session)

	function handleLogoutClick() {
		dispatch(userLogout())
	}

	return (
		<nav className="navbar bg-dark">
			<div>
				<h1>
					<Link to={isAuthenticated ? '/dashboard' : '/'} className="icon-link">
						<FaCode /> DevConnector
					</Link>
				</h1>
				{!loading && (
					<>
						{isAuthenticated ? (
							<ul>
								<li>
									<Link to="/dashboard" className="icon-link">
										<FaUser />
										<span className="hide-sm">Dashboard</span>
									</Link>
								</li>
								<li>
									<Link
										to="/"
										className="icon-link"
										onClick={handleLogoutClick}
									>
										<FaSignOutAlt />
										<span className="hide-sm">Logout</span>
									</Link>
								</li>
							</ul>
						) : (
							<ul>
								<li>
									<Link to="/" className="icon-link">
										<FaUsers />
										<span>Developers</span>
									</Link>
								</li>
								<li>
									<Link to="/register" className="icon-link">
										<FaUserPlus />
										<span>Register</span>
									</Link>
								</li>
								<li>
									<Link to="/login" className="icon-link">
										<FaSignInAlt />
										<span>Login</span>
									</Link>
								</li>
							</ul>
						)}
					</>
				)}
			</div>
		</nav>
	)
}
