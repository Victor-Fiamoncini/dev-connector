import { FindPostByIdRepository } from '@data/contracts'

import { PostMongoDataSource } from '@infra/databases/mongo'

export class MongoFindPostByIdRepository implements FindPostByIdRepository {
	async findPostById(id: string) {
		const post = await PostMongoDataSource.findById(id)

		return post
	}
}
