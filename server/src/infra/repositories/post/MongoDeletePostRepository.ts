import { DeletePostRepository } from '@data/contracts'
import { PostDataModel } from '@data/models'
import { PostDeleteError } from '@data/errors'
import { PostMongoDataSource } from '@infra/databases/mongo'

export class MongoDeletePostRepository implements DeletePostRepository {
	async deletePost(id: string): Promise<PostDataModel> {
		const deletedPost = await PostMongoDataSource.findByIdAndDelete(id)

		if (!deletedPost) {
			throw new PostDeleteError()
		}

		return {
			id: deletedPost.id,
			name: deletedPost.name,
			text: deletedPost.text,
			avatar: deletedPost.avatar,
			likes: deletedPost.likes,
			comments: deletedPost.comments,
			user: deletedPost.user,
			created_at: deletedPost.createdAt,
			update_at: deletedPost.updatedAt,
		}
	}
}
