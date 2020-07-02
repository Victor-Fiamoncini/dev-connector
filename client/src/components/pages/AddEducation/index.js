import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { FaCodeBranch } from 'react-icons/fa'

import Alert from '../../layout/Alert'
import { setAlert } from '../../../store/ducks/alert/actions'
import { storeEducation } from '../../../store/ducks/profile/actions'

export default function AddEducation() {
	const dispatch = useDispatch()
	const history = useHistory()

	const [disableTo, setDisableTo] = useState(false)
	const [formData, setFormData] = useState({
		school: '',
		degree: '',
		fieldofstudy: '',
		from: '',
		to: '',
		current: false,
		description: '',
	})

	const {
		school,
		degree,
		fieldofstudy,
		from,
		to,
		current,
		description,
	} = formData

	function handleInputChange(event) {
		const { name, value } = event.target

		setFormData({ ...formData, [name]: value })
	}

	function handleCheckboxChange() {
		setFormData({ ...formData, current: !disableTo })

		setDisableTo(!disableTo)
	}

	function handleFormSubmit(event) {
		event.preventDefault()

		if (!school || !degree || !from) {
			dispatch(setAlert('Please, fill all required fields', 'danger'))
		} else {
			dispatch(storeEducation(formData, history))
		}
	}

	return (
		<section className="container">
			<Alert />
			<h1 className="large text-primary">Add Your Education</h1>
			<p className="lead">
				<FaCodeBranch /> Add any school or bootcamp or lesson that you have
				attended
			</p>
			<small>* = required field</small>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form-group">
					<input
						required
						type="text"
						placeholder="* School"
						name="school"
						value={school}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						required
						type="text"
						placeholder="* Degree"
						name="degree"
						value={degree}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Field of Study"
						name="fieldofstudy"
						value={fieldofstudy}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<h4>From Date</h4>
					<input
						required
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
							onChange={handleCheckboxChange}
						/>{' '}
						Current
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
					Add Education
				</button>
				<Link to="/dashboard" className="btn btn-light my-1">
					Go Back
				</Link>
			</form>
		</section>
	)
}
