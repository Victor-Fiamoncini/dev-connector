import React from 'react'
import PropTypes from 'prop-types'
import { FaCheck } from 'react-icons/fa'

const ProfileAbout = ({ bio, skills, user }) => (
	<div className="profile-about bg-light p-2">
		{bio && (
			<>
				<h2 className="text-primary">{user.name} Biography</h2>
				<p>{bio}</p>
				<div className="line" />
			</>
		)}
		<h2 className="text-primary">Skill Set</h2>
		{skills.length && (
			<div className="skills">
				{skills.map((skill, index) => (
					<div key={index} className="p-1">
						<FaCheck /> {skill}
					</div>
				))}
			</div>
		)}
	</div>
)

ProfileAbout.propTypes = {
	bio: PropTypes.string,
	skills: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	user: PropTypes.object.isRequired,
}

export default ProfileAbout
