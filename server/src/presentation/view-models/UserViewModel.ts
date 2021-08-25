import { User } from '@domain/entities'

export class UserViewModel {
	constructor(
		public readonly user: Omit<User, 'password' | 'created_at' | 'update_at'>,
		public readonly token?: string
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
