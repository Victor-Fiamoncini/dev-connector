import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

export default function ProfileItem({ profile }) {
	const { user, company, status, location, skills } = profile

	return (
		<div className="profile bg-light">
			<img className="round-img" src={user.avatar} alt={user.name} />
			<div>
				<h2>{user.name}</h2>
				<p>
					{status} {company && <span> as {company}</span>}
				</p>
				<p className="my-1"> {location && <span>{location}</span>}</p>
				<Link to={`/profile/${user._id}`} className="btn btn-primary">
					View Profile
				</Link>
			</div>
			<ul>
				{skills.slice(0, 4).map((skill, index) => (
					<li key={index} className="text-primary icon-link text-left">
						<FaCheck />
						{skill}
					</li>
				))}
			</ul>
		</div>
	)
}

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
}
