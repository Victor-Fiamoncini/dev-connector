import { DeletePostRepository } from '@data/contracts'
import { PostDataModel } from '@data/models'
import { PostMongoDataSource } from '@infra/databases/mongo'

export class MongoDeletePostRepository implements DeletePostRepository {
	async deletePost(id: string): Promise<PostDataModel | null> {
		const deletedPost = await PostMongoDataSource.findByIdAndDelete(id)

		if (!deletedPost) {
			return null
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
