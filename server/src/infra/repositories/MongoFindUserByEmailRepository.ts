import { FindUserByEmailRepository } from '@data/contracts'
import { UserDataModel } from '@data/models'
import { UserMongoDataSource } from '@infra/databases/mongo'

// prettier-ignore
export class MongoFindUserByEmailRepository implements FindUserByEmailRepository {
	async findUserByEmail(email: string): Promise<UserDataModel | null> {
		const user = await UserMongoDataSource.findOne({ email })

		if (user) {
			const { id,  email, name, password, avatar, createdAt, updatedAt } = user

			return {
				id,
				name,
				email,
				password,
				avatar,
				created_at: createdAt,
				update_at: updatedAt,
			}
		}

		return null
	}
}
