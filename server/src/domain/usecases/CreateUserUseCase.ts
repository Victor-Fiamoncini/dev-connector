import { User } from '@domain/entities'

export namespace CreateUserUseCase {
	export type Params = {
		name: string
		email: string
		password: string
	}
}

export interface CreateUserUseCase {
	createUser(userData: CreateUserUseCase.Params): Promise<User>
}
