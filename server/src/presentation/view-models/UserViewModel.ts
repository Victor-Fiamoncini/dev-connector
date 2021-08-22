import { User } from '@domain/entities'

export class UserViewModel {
	constructor(
		public user: {
			id: string
			name: string
			email: string
			avatar: string
		},
		public token?: string
	) {}

	static map(user: User, token?: string) {
		return new UserViewModel(
			{
				id: user.id,
				name: user.name,
				email: user.email,
				avatar: user.avatar,
			},
			token
		)
	}
}
