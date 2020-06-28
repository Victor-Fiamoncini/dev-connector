import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { FaCodeBranch } from 'react-icons/fa'

import Alert from '../../layout/Alert'
import { setAlert } from '../../../store/ducks/alert/actions'
import { storeExperience } from '../../../store/ducks/profile/actions'

export default function AddExperience() {
	const dispatch = useDispatch()
	const history = useHistory()

	function handleInputChange(event) {
		const { name, value } = event.target

		setFormData({ ...formData, [name]: value })
	}

	function handleFormSubmit(event) {
		event.preventDefault()
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
			<form className="form">
				<div className="form-group">
					<input type="text" placeholder="* Job Title" name="title" required />
				</div>
				<div className="form-group">
					<input type="text" placeholder="* Company" name="company" required />
				</div>
				<div className="form-group">
					<input type="text" placeholder="Location" name="location" />
				</div>
				<div className="form-group">
					<h4>From Date</h4>
					<input type="date" name="from" />
				</div>
				<div className="form-group">
					<p>
						<input type="checkbox" name="current" value="" /> Current Job
					</p>
				</div>
				<div className="form-group">
					<h4>To Date</h4>
					<input type="date" name="to" />
				</div>
				<div className="form-group">
					<textarea
						name="description"
						cols="30"
						rows="5"
						placeholder="Job Description"
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
