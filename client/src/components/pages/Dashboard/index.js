import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

import Spinner from '../../layout/Spinner'
import Alert from '../../layout/Alert'
import DashboardActions from '../../layout/DashboardActions'
import Experiences from '../../layout/Experiences'
import Educations from '../../layout/Educations'

import { getProfile } from '../../../store/ducks/profile/actions'

export default function Dashboard() {
	const dispatch = useDispatch()

	const { user } = useSelector(state => state.session)
	const { loading, profile } = useSelector(state => state.profile)

	useEffect(() => {
		dispatch(getProfile())
	}, [])

	return loading && !profile ? (
		<Spinner loading={loading} />
	) : (
		<section className="container">
			<Alert />
			<h1 className="large text-primary">Dashboard</h1>
			<p className="lead">
				<FaUser /> Welcome {user && user.name}
			</p>
			{!profile ? (
				<>
					<p>You have not yet setup a profile, please add some info</p>
					<Link to="/create-profile" className="btn btn-primary my-1">
						Create Profile
					</Link>
				</>
			) : (
				<>
					<DashboardActions />
					<Experiences experiences={profile.experience} />
					<Educations educations={profile.education} />
				</>
			)}
		</section>
	)
}
