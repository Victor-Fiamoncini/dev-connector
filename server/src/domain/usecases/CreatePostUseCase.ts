import { Post } from '@domain/entities'

export namespace CreatePostUseCase {
	export type Params = {
		name: string
		text: string
		avatar: string
		user: string
	}
}

export interface CreatePostUseCase {
	createPost(data: CreatePostUseCase.Params): Promise<Post>
}
