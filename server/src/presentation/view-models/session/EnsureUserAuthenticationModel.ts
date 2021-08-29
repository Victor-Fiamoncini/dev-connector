import { User } from '@domain/entities'

export class EnsureUserAuthenticationModel {
	user: {
		id: string
		name: string
		email: string
		avatar: string
	}
	token: string

	static map(user: User, token: string): EnsureUserAuthenticationModel {
		return {
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
				avatar: user.avatar,
			},
			token,
		}
	}
}
