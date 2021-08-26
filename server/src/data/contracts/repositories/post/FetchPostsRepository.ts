import { PostDataModel } from '@data/data-models'

export interface FetchPostsRepository {
	fetchPosts(): Promise<PostDataModel.Props[]>
}
