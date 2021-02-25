import { User } from '@domain/entities'

interface CreateUserUseCaseDTO {
	name: string
	email: string
	password: string
}

export interface CreateUserUseCase {
	createUser(userData: CreateUserUseCaseDTO): Promise<User>
}
