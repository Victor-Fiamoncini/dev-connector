import { FetchPostRepository } from '@data/contracts'
import { PostDataModel } from '@data/models'
import { PostMongoDataSource } from '@infra/databases/mongo'

export class MongoFetchPostRepository implements FetchPostRepository {
	async fetchPost(id: string): Promise<PostDataModel | null> {
		const post = await PostMongoDataSource.findById(id)

		return post
	}
}
