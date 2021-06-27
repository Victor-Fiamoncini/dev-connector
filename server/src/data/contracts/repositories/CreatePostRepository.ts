import { PostDataModel } from '@data/models'

export namespace CreatePostRepository {
	export type Params = {
		name: string
		text: string
		avatar: string
		user: string
	}
}

export interface CreatePostRepository {
	createPost(postData: CreatePostRepository.Params): Promise<PostDataModel>
}
