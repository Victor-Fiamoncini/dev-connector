import React from 'react'
import { useDispatch } from 'react-redux'

import actions from '../../store/ducks/session/actions'

export default function Login() {
	const dispatch = useDispatch()

	dispatch(actions.userStore('victor', 'victor@email.com', '123456'))

	return <div>Login</div>
}
