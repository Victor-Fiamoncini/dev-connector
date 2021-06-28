import { FindUserByEmailRepository } from '@data/contracts'
import { UserDataModel } from '@data/models'
import { UserMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoFindUserByEmailRepository implements FindUserByEmailRepository {
	async findUserByEmail(email: string): Promise<UserDataModel | null> {
		const findedUser = await UserMongoDataSource.findOne({ email })

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
