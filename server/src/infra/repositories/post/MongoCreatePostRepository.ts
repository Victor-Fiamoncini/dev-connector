import { CreatePostRepository } from '@data/contracts'
import { PostDataModel } from '@data/models'
import { PostMongoDataSource } from '@infra/databases/mongo'

export class MongoCreatePostRepository implements CreatePostRepository {
	async createPost(
		postData: CreatePostRepository.Params
	): Promise<PostDataModel> {
		const createdPost = await PostMongoDataSource.create(postData)

		return {
			id: createdPost.id,
			name: createdPost.name,
			text: createdPost.text,
			avatar: createdPost.avatar,
			likes: createdPost.likes,
			comments: createdPost.comments,
			user: createdPost.user,
			created_at: createdPost.createdAt,
			update_at: createdPost.updatedAt,
		}
	}
}
