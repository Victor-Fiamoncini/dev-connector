import { User } from '@domain/entities'

export namespace CreateUserUseCase {
	export type Params = {
		name: string
		email: string
		password: string
	}
}

export interface CreateUserUseCase {
	createUser(data: CreateUserUseCase.Params): Promise<User>
}
