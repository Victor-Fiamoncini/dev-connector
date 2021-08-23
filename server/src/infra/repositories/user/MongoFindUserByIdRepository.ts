import { FindUserByIdRepository } from '@data/contracts'

import { UserMongoDataSource } from '@infra/databases/mongo'

export class MongoFindUserByIdRepository implements FindUserByIdRepository {
	async findUserById(id: string) {
		const findedUser = await UserMongoDataSource.findById(id)

		if (!findedUser) {
			return null
		}

		return findedUser
	}
}
