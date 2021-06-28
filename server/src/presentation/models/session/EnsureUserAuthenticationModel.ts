export type EnsureUserAuthenticationModel = {
	user: {
		id: string
		name: string
		email: string
		avatar: string
	}
	token: string
}
