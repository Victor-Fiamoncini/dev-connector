import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import {
	FaUser,
	FaTwitter,
	FaFacebook,
	FaLinkedin,
	FaInstagram,
	FaYoutube,
} from 'react-icons/fa'

import Alert from '../../layout/Alert'
import { setAlert } from '../../../store/ducks/alert/actions'
import { storeProfile } from '../../../store/ducks/profile/actions'

export default function CreateProfile() {
	const dispatch = useDispatch()
	const history = useHistory()

	const [socialInputs, setSocialInputs] = useState(false)
	const [formData, setFormData] = useState({
		company: '',
		website: '',
		location: '',
		status: '',
		skills: '',
		githubusername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: '',
	})

	const {
		company,
		website,
		location,
		status,
		skills,
		githubusername,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram,
	} = formData

	function handleToggleSocialLinks() {
		setSocialInputs(!socialInputs)
	}

	function handleInputChange(event) {
		const { name, value } = event.target

		setFormData({ ...formData, [name]: value })
	}

	function handleFormSubmit(event) {
		event.preventDefault()

		if (!skills || !status) {
			dispatch(setAlert('Please, fill all required fields', 'danger'))
		} else {
			dispatch(
				storeProfile(
					{
						company,
						website,
						location,
						status,
						skills,
						githubusername,
						bio,
						social: {
							twitter,
							facebook,
							linkedin,
							youtube,
							instagram,
						},
					},
					history
				)
			)
		}
	}

	return (
		<section className="container">
			<Alert />
			<h1 className="large text-primary">Create Your Profile</h1>
			<p className="lead">
				<FaUser /> Let&apos;s get some information to make your profile stand
				out
			</p>
			<small>* = required field</small>
			<form className="form" onSubmit={handleFormSubmit}>
				<div className="form-group">
					<select
						name="status"
						required
						value={status}
						onChange={handleInputChange}
					>
						<option value="0">* Select Professional Status</option>
						<option value="Developer">Developer</option>
						<option value="Junior Developer">Junior Developer</option>
						<option value="Senior Developer">Senior Developer</option>
						<option value="Manager">Manager</option>
						<option value="Student or Learning">Student or Learning</option>
						<option value="Instructor">Instructor or Teacher</option>
						<option value="Intern">Intern</option>
						<option value="Other">Other</option>
					</select>
					<small className="form-text">
						Give us an idea of where you are at in your career
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Company"
						name="company"
						value={company}
						onChange={handleInputChange}
					/>
					<small className="form-text">
						Could be your own company or one you work for
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Website"
						name="website"
						value={website}
						onChange={handleInputChange}
					/>
					<small className="form-text">
						Could be your own or a company website
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Location"
						name="location"
						value={location}
						onChange={handleInputChange}
					/>
					<small className="form-text">
						City and state suggested (eg. Boston, MA)
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="* Skills"
						name="skills"
						required
						value={skills}
						onChange={handleInputChange}
					/>
					<small className="form-text">
						Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
					</small>
				</div>
				<div className="form-group">
					<input
						type="text"
						placeholder="Github Username"
						name="githubusername"
						value={githubusername}
						onChange={handleInputChange}
					/>
					<small className="form-text">
						If you want your latest repos and a Github link, include your
						username
					</small>
				</div>
				<div className="form-group">
					<textarea
						placeholder="Bio"
						name="bio"
						value={bio}
						onChange={handleInputChange}
					></textarea>
					<small className="form-text">Tell us a little about yourself</small>
				</div>
				<div className="my-2">
					<button
						type="button"
						className="btn btn-light"
						onClick={handleToggleSocialLinks}
					>
						Add Social Network Links
					</button>
					<span>Optional</span>
				</div>
				{socialInputs && (
					<>
						<div className="form-group social-input">
							<FaTwitter size={30} />
							<input
								type="text"
								placeholder="Twitter URL"
								name="twitter"
								value={twitter}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group social-input">
							<FaFacebook size={30} />
							<input
								type="text"
								placeholder="Facebook URL"
								name="facebook"
								value={facebook}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group social-input">
							<FaYoutube size={30} />
							<input
								type="text"
								placeholder="YouTube URL"
								name="youtube"
								value={youtube}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group social-input">
							<FaLinkedin size={30} />
							<input
								type="text"
								placeholder="Linkedin URL"
								name="linkedin"
								value={linkedin}
								onChange={handleInputChange}
							/>
						</div>
						<div className="form-group social-input">
							<FaInstagram size={30} />
							<input
								type="text"
								placeholder="Instagram URL"
								name="instagram"
								value={instagram}
								onChange={handleInputChange}
							/>
						</div>
					</>
				)}
				<button type="submit" className="btn btn-primary my-1">
					Save Profile
				</button>
				<Link to="/dashboard" className="btn btn-light my-1">
					Go Back
				</Link>
			</form>
		</section>
	)
}
