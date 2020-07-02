import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Moment from 'react-moment'
import { FaTrash } from 'react-icons/fa'

import { destroyEducation } from '../../../store/ducks/profile/actions'

export default function Educations({ educations }) {
	const dispatch = useDispatch()

	function handleButtonClick(id) {
		dispatch(destroyEducation(id))
	}

	return (
		educations.length > 0 && (
			<>
				<h2 className="my-2">Education Credentials</h2>
				<table className="table">
					<thead>
						<tr>
							<th>School</th>
							<th className="hide-sm">Degree</th>
							<th className="hide-sm">Years</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{educations.map(education => (
							<tr key={education._id}>
								<td>{education.school}</td>
								<td className="hide-sm">{education.degree}</td>
								<td>
									<Moment format="YYYY/MM/DD">{education.from}</Moment> -{' '}
									{!education.to ? (
										' Now'
									) : (
										<Moment format="YYYY/MM/DD">{education.to}</Moment>
									)}
								</td>
								<td>
									<button
										className="btn btn-danger icon-link"
										onClick={() => handleButtonClick(education._id)}
									>
										<FaTrash /> Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		)
	)
}

Educations.propTypes = {
	educations: PropTypes.array.isRequired,
}
