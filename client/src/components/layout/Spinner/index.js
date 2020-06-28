import React from 'react'
import PropTypes from 'prop-types'
import { SyncLoader } from 'react-spinners'

import './style.css'

export default function Spinner({ loading }) {
	return (
		<div className="spinner-wrapper">
			<SyncLoader size={60} color={'#17a2b8'} loading={loading} />
		</div>
	)
}

Spinner.propTypes = {
	loading: PropTypes.bool.isRequired,
}
