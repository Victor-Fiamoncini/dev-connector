import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { FaCodeBranch } from 'react-icons/fa'

import Alert from '../../layout/Alert'
import { setAlert } from '../../../store/ducks/alert/actions'
import { storeExperience } from '../../../store/ducks/profile/actions'

export default function AddExperience() {
	const dispatch = useDispatch()
	const history = useHistory()

	const [disableTo, setDisableTo] = useState(false)
	const [formData, setFormData] = useState({
		company: '',
		title: '',
		location: '',
		from: '',
		to: '',
		current: false,
		description: '',
	})

	const { company, title, location, from, to, current, description } = formData

	function handleInputChange(event) {
		const { name, value } = event.target

		if (name === 'current') {
			setDisableTo(!disableTo)
		}

		setFormData({ ...formData, [name]: value })
	}

	function handleFormSubmit(event) {
		event.preventDefault()

		if (!title || !company) {
			dispatch(setAlert('Please, fill all required fields', 'danger'))
		} else {
			dispatch(storeExperience(formData, history))
		}
	}

	return (
		<section className="container">
			<Alert />
			<h1 className="large text-primary">Add An Experience</h1>
			<p className="lead">
				<FaCodeBranch /> Add any developer/programming positions that you have
				had in the past
			</p>
			<small>* = required field</small>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form-group">
					<input
						type="text"
						placeholder="* Job Title"
						name="title"
						required
						value={title}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="* Company"
						name="company"
						required
						value={company}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Location"
						name="location"
						value={location}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<h4>From Date</h4>
					<input
						type="date"
						name="from"
						value={from}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<p>
						<input
							type="checkbox"
							name="current"
							value={current ? true : false}
							onChange={handleInputChange}
						/>{' '}
						Current Job
					</p>
				</div>
				<div className="form-group">
					<h4>To Date</h4>
					<input
						type="date"
						name="to"
						value={to}
						onChange={handleInputChange}
						disabled={disableTo}
					/>
				</div>
				<div className="form-group">
					<textarea
						name="description"
						cols="30"
						rows="5"
						placeholder="Job Description"
						value={description}
						onChange={handleInputChange}
					></textarea>
				</div>
				<button type="submit" className="btn btn-primary my-1">
					Add Experience
				</button>
				<Link to="/dashboard" className="btn btn-light my-1">
					Go Back
				</Link>
			</form>
		</section>
	)
}
