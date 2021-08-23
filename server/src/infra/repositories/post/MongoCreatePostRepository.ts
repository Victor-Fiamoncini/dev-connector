import { CreatePostRepository } from '@data/contracts'

import { PostMongoDataSource } from '@infra/databases/mongo'

export class MongoCreatePostRepository implements CreatePostRepository {
	async createPost(data: CreatePostRepository.Params) {
		const createdPost = await PostMongoDataSource.create(data)

		return createdPost
	}
}
