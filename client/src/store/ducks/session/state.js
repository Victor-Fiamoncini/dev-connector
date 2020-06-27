import * as auth from '../../../utils/token'

export default {
	user: {},
	token: auth.getToken(),
	isAuthenticated: false,
	loading: false,
}
