import { DeletePostRepository } from '@data/contracts'

import { PostMongoDataSource } from '@infra/databases/mongo'

export class MongoDeletePostRepository implements DeletePostRepository {
	async deletePost(id: string) {
		const deletedPost = await PostMongoDataSource.findByIdAndDelete(id)

		if (!deletedPost) {
			return null
		}

		return deletedPost
	}
}
