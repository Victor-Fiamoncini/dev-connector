import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

import { userStore } from '../../store/ducks/session/actions'

export default function Register() {
	const dispatch = useDispatch()

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const { name, email, password, confirmPassword } = formData

	function handleInputChange(event) {
		const { name, value } = event.target

		setFormData({ ...formData, [name]: value })
	}

	function handleFormSubmit(event) {
		event.preventDefault()

		if (password !== confirmPassword) {
			console.log('passwords dont match')
		} else {
			dispatch(userStore(name, email, password))
		}
	}

	return (
		<>
			<h1 className="large text-primary">Sign Up</h1>
			<p className="lead">
				<FaUser /> Create Your Account
			</p>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						required
						value={name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						required
						value={email}
						onChange={handleInputChange}
					/>
					<small className="form-text">
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email
					</small>
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
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="confirmPassword"
						required
						minLength="6"
						value={confirmPassword}
						onChange={handleInputChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Register
				</button>
			</form>
			<p className="my-1">
				Already have an account? <Link to="/login">Sign In</Link>
			</p>
		</>
	)
}
