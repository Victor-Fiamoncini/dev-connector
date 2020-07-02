import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useRouteMatch } from 'react-router-dom'

import { getProfileById } from '../../../store/ducks/profile/actions'

import Spinner from '../../layout/Spinner'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'

export default function Profile() {
	const dispatch = useDispatch()
	const { params } = useRouteMatch()
	const { loading: profileLoading, profile } = useSelector(
		state => state.profile
	)
	const { loading: authLoading, isAuthenticated, user } = useSelector(
		state => state.session
	)

	useEffect(() => {
		dispatch(getProfileById(params.id))
	}, [params.id])

	return (
		<>
			{!profile || profileLoading ? (
				<Spinner loading={profileLoading} />
			) : (
				<section className="container">
					<Link to="/profiles" className="btn btn-light">
						Go Back to Profiles
					</Link>
					{isAuthenticated && !authLoading && user._id === profile.user._id && (
						<Link to="/edit-profile" className="btn btn-dark">
							Edit Profile
						</Link>
					)}
					<div className="profile-grid my-1">
						<ProfileTop
							company={profile.company}
							location={profile.location}
							social={profile.social}
							status={profile.status}
							user={profile.user}
							website={profile.website}
						/>
						<ProfileAbout
							bio={profile.bio}
							skills={profile.skills}
							user={profile.user}
						/>
						{profile.experience.length > 0 && (
							<div className="profile-exp bg-white p-2">
								<h2 className="text-primary">Experience</h2>
								{profile.experience.map(experience => (
									<ProfileExperience
										key={experience._id}
										experience={experience}
									/>
								))}
							</div>
						)}
						{profile.education.length > 0 && (
							<div className="profile-edu bg-white p-2">
								<h2 className="text-primary">Education</h2>
								{profile.education.map(education => (
									<ProfileEducation key={education._id} education={education} />
								))}
							</div>
						)}
					</div>
				</section>
			)}
		</>
	)
}
