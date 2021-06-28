import { PostDataModel } from '@data/models'

export interface FetchPostRepository {
	fetchPost(id: string): Promise<PostDataModel | null>
}
