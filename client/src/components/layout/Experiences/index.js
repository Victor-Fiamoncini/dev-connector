import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Moment from 'react-moment'
import { FaTrash } from 'react-icons/fa'

import { getProfile } from '../../../store/ducks/profile/actions'

export default function Experiences({ experiences }) {
	const dispatch = useDispatch()

	return (
		<>
			<h2 className="my-2">Experience Credentials</h2>
			<table className="table">
				<thead>
					<tr>
						<th>Company</th>
						<th className="hide-sm">Title</th>
						<th className="hide-sm">Years</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{experiences.map(experience => (
						<tr key={experience._id}>
							<td>{experience.company}</td>
							<td className="hide-sm">{experience.title}</td>
							<td>
								<Moment format="YYYY/MM/DD">{experience.from}</Moment> -{' '}
								{!experience.to ? (
									' Now'
								) : (
									<Moment format="YYYY/MM/DD">{experience.to}</Moment>
								)}
							</td>
							<td>
								<button className="btn btn-danger icon-link">
									<FaTrash /> Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

Experiences.propTypes = {
	experiences: PropTypes.object.isRequired,
}
