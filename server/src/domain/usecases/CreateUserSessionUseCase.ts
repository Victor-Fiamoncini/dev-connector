import { User } from '@domain/entities'

export namespace CreateUserSessionUseCase {
	export type Params = {
		email: string
		password: string
	}
}

export interface CreateUserSessionUseCase {
	createSession(data: CreateUserSessionUseCase.Params): Promise<User>
}
