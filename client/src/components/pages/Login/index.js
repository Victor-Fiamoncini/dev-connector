import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

import { userStore } from '../../../store/ducks/session/actions'

export default function Register() {
	const dispatch = useDispatch()

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	function handleInputChange(event) {
		const { name, value } = event.target

		setFormData({ ...formData, [name]: value })
	}

	function handleFormSubmit(event) {
		event.preventDefault()

		dispatch(userStore('', email, password))
	}

	return (
		<>
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
		</>
	)
}
