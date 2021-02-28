import { User } from '@domain/entities'

namespace CreateUserUseCase {
	export type Params = {
		name: string
		email: string
		password: string
	}
}

export interface CreateUserUseCase {
	createUser(userData: CreateUserUseCase.Params): Promise<User>
}
