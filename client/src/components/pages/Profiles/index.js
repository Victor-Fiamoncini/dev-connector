import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaConnectdevelop } from 'react-icons/fa'

import { getProfiles } from '../../../store/ducks/profile/actions'

import Spinner from '../../layout/Spinner'
import ProfileItem from './ProfileItem'

export default function Profiles() {
	const dispatch = useDispatch()
	const { loading, profiles } = useSelector(state => state.profile)

	useEffect(() => {
		dispatch(getProfiles())
	}, [])

	return (
		<>
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<section className="container">
					<h1 className="large text-primary">Developers</h1>
					<p className="lead">
						<FaConnectdevelop /> Browse and connect with developers
					</p>
					<div className="profiles">
						{profiles.length > 0 ? (
							profiles.map(profile => (
								<ProfileItem key={profile._id} profile={profile} />
							))
						) : (
							<h4>No profiles found...</h4>
						)}
					</div>
				</section>
			)}
		</>
	)
}
