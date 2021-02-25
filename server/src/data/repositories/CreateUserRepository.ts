import { UserModel } from '@data/models'

export interface CreateUserDTO {
	name: string
	email: string
	password: string
}

export interface CreateUserRepository {
	createUser(userData: CreateUserDTO): Promise<UserModel>
}
