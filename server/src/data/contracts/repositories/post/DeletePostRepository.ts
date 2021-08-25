import { PostDataModel } from '@data/data-models'

export interface DeletePostRepository {
	deletePost(id: string): Promise<PostDataModel | null>
}
