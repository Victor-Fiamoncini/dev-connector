import { User } from '@domain/entities'

export class CreateUserModel {
	user: {
		id: string
		name: string
		email: string
		avatar: string
	}
	token: string

	static map(user: User, token: string): CreateUserModel {
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
