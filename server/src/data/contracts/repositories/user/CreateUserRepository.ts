import { UserDataModel } from '@data/data-models'

export namespace CreateUserRepository {
	export type Params = {
		name: string
		email: string
		password: string
		avatar: string
	}
}

export interface CreateUserRepository {
	createUser(data: CreateUserRepository.Params): Promise<UserDataModel>
}
