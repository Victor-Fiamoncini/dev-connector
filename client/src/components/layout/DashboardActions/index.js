import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaBlackTie, FaGraduationCap } from 'react-icons/fa'

export default function DashboardActions() {
	return (
		<div className="dash-buttons">
			<Link to="/edit-profile" className="btn btn-light icon-link">
				<FaUserCircle size={26} className="text-primary" /> Edit Profile
			</Link>
			<Link to="/add-experience" className="btn btn-light icon-link">
				<FaBlackTie size={26} className="text-primary" /> Add Experience
			</Link>
			<Link to="/add-education" className="btn btn-light icon-link">
				<FaGraduationCap size={26} className="text-primary" /> Add Education
			</Link>
		</div>
	)
}
