import React from 'react'
import { useSelector } from 'react-redux'

export default function Alert() {
	const { alerts } = useSelector(state => state.alert)

	return (
		alerts !== null &&
		alerts.length > 0 &&
		alerts.map(alert => (
			<div key={alert.id} className={`alert alert-${alert.type}`}>
				<p>{alert.message}</p>
			</div>
		))
	)
}
