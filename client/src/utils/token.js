import api from '../services/api'

export function setToken(token) {
	if (token) {
		localStorage.setItem('auth_token', token)
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		removeToken()
	}
}

export function removeToken() {
	localStorage.removeItem('auth_token')
	delete api.defaults.headers.common['Authorization']
}

export const getToken = () => localStorage.getItem('auth_token')
