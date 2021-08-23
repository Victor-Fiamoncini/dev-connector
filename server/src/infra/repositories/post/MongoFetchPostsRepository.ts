import { FetchPostsRepository } from '@data/contracts'

import { PostMongoDataSource } from '@infra/databases/mongo'

export class MongoFetchPostsRepository implements FetchPostsRepository {
	async fetchPosts() {
		const posts = await PostMongoDataSource.find().sort({ date: -1 })

		return posts
	}
}
