import { FindPostByIdRepository } from '@data/contracts'
import { PostDataModel } from '@data/models'

import { PostMongoDataSource } from '@infra/databases/mongo'

export class MongoFindPostByIdRepository implements FindPostByIdRepository {
	async findPostById(id: string): Promise<PostDataModel | null> {
		const post = await PostMongoDataSource.findById(id)

		return post
	}
}
