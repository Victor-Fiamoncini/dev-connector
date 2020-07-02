import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const ProfileItem = ({ profile }) => (
	<div className="profile bg-light">
		<img
			className="round-img"
			src={profile.user.avatar}
			alt={profile.user.name}
		/>
		<div>
			<h2>{profile.user.name}</h2>
			<p>
				{profile.status} {profile.company && <span> as {profile.company}</span>}
			</p>
			<p className="my-1">
				{' '}
				{profile.location && <span>{profile.location}</span>}
			</p>
			<Link to={`/profile/${profile.user._id}`} className="btn btn-primary">
				View Profile
			</Link>
		</div>
		<ul>
			{profile.skills.split(',').map((skill, index) => (
				<li key={index} className="text-primary icon-link text-left">
					<FaCheck />
					{skill}
				</li>
			))}
		</ul>
	</div>
)

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
}

export default ProfileItem
