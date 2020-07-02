import React from 'react'
import PropTypes from 'prop-types'
import {
	FaGlobe,
	FaTwitter,
	FaFacebook,
	FaLinkedin,
	FaInstagram,
	FaYoutube,
} from 'react-icons/fa'

const ProfileTop = ({ company, location, social, status, user, website }) => (
	<div className="profile-top bg-primary p-2">
		<img className="round-img my-1" src={user.avatar} alt={user.name} />
		<h1 className="large">{user.name}</h1>
		<p className="lead">
			{status} {company && <span> at {company}</span>}
		</p>
		<p>{location && <span>{location}</span>}</p>
		<div className="icons my-1">
			{website && (
				<a href={website} target="_blank" rel="noopener noreferrer">
					<FaGlobe size={30} />
				</a>
			)}
			{social && social.twitter && (
				<a href={social.twitter} target="_blank" rel="noopener noreferrer">
					<FaTwitter size={30} />
				</a>
			)}
			{social && social.facebook && (
				<a href={social.facebook} target="_blank" rel="noopener noreferrer">
					<FaFacebook size={30} />
				</a>
			)}
			{social && social.linkedin && (
				<a href={social.linkedin} target="_blank" rel="noopener noreferrer">
					<FaLinkedin size={30} />
				</a>
			)}
			{social && social.youtube && (
				<a href={social.youtube} target="_blank" rel="noopener noreferrer">
					<FaYoutube size={30} />
				</a>
			)}
			{social && social.instagram && (
				<a href={social.instagram} target="_blank" rel="noopener noreferrer">
					<FaInstagram size={30} />
				</a>
			)}
		</div>
	</div>
)

ProfileTop.propTypes = {
	company: PropTypes.string,
	location: PropTypes.string,
	social: PropTypes.object,
	status: PropTypes.string,
	user: PropTypes.object.isRequired,
	website: PropTypes.string,
}

export default ProfileTop
