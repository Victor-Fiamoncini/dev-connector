import { PostDataModel } from '@data/models'

export interface DeletePostRepository {
	deletePost(id: string): Promise<PostDataModel>
}
