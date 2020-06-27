import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {
	const { isAuthenticated, loading } = useSelector(state => state.session)

	return (
		<Route
			{...rest}
			render={props =>
				!isAuthenticated && !loading ? (
					<Redirect to="/" />
				) : (
					<Component {...props} />
				)
			}
		/>
	)
}

PrivateRoute.propTypes = {
	component: PropTypes.elementType.isRequired,
}
