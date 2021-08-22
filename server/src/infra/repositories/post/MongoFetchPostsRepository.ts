import { FetchPostsRepository } from '@data/contracts'
import { PostDataModel } from '@data/models'

import { PostMongoDataSource } from '@infra/databases/mongo'

export class MongoFetchPostsRepository implements FetchPostsRepository {
	async fetchPosts(): Promise<PostDataModel[]> {
		const posts = await PostMongoDataSource.find().sort({ date: -1 })

		return posts
	}
}
