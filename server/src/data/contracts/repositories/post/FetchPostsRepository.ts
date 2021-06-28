import { PostDataModel } from '@data/models'

export interface FetchPostsRepository {
	fetchPosts(): Promise<PostDataModel[]>
}
