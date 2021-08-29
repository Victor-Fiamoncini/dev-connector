import { User } from '@domain/entities'

export class RefreshUserAuthenticationModel {
	id: string
	name: string
	email: string
	avatar: string

	static map(user: User): RefreshUserAuthenticationModel {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			avatar: user.avatar,
		}
	}
}
