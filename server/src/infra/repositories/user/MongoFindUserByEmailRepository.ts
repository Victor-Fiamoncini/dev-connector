import { FindUserByEmailRepository } from '@data/contracts'

import { UserMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoFindUserByEmailRepository implements FindUserByEmailRepository {
	async findUserByEmail(email: string) {
		const findedUser = await UserMongoDataSource.findOne({ email })

		if (!findedUser) {
			return null
		}

		return findedUser
	}
}
