import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProfile } from '../../../store/ducks/profile/actions'

export default function Home() {
	const dispatch = useDispatch()
	const { profile } = useSelector(state => state.profile)

	useEffect(() => {
		dispatch(getProfile())
	}, [])

	return <section className="container">{/* <div>{profile}</div> */}</section>
}
