import { FindUserByIdRepository } from '@data/contracts'
import { UserDataModel } from '@data/models'
import { UserMongoDataSource } from '@infra/databases/mongo'

export class MongoFindUserByIdRepository implements FindUserByIdRepository {
	async findUserById(id: string): Promise<UserDataModel | null> {
		const findedUser = await UserMongoDataSource.findById(id)

		if (findedUser) {
			return {
				id: findedUser.id,
				name: findedUser.name,
				email: findedUser.email,
				password: findedUser.password,
				avatar: findedUser.avatar,
				created_at: findedUser.createdAt,
				update_at: findedUser.updatedAt,
			}
		}

		return null
	}
}
