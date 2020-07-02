import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

import Alert from '../../layout/Alert'
import { userLogin } from '../../../store/ducks/session/actions'

export default function Register() {
	const dispatch = useDispatch()
	const { isAuthenticated } = useSelector(state => state.session)

	const [formData, setFormData] = useState({ email: '', password: '' })
	const { email, password } = formData

	function handleInputChange(event) {
		const { name, value } = event.target

		setFormData({ ...formData, [name]: value })
	}

	function handleFormSubmit(event) {
		event.preventDefault()

		dispatch(userLogin(email, password))
	}

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />
	} else {
		return (
			<section className="container" style={{ maxWidth: '768px' }}>
				<Alert />
				<h1 className="large text-primary">Sign In</h1>
				<p className="lead">
					<FaUser /> Sign Into Your Account
				</p>
				<form className="form" onSubmit={handleFormSubmit}>
					<div className="form-group">
						<input
							type="email"
							placeholder="Email Address"
							name="email"
							required
							value={email}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Password"
							name="password"
							required
							minLength="6"
							value={password}
							onChange={handleInputChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Login
					</button>
				</form>
				<p className="my-1">
					Don&apos;t have an account? <Link to="/register">Sign Up</Link>
				</p>
			</section>
		)
	}
}
