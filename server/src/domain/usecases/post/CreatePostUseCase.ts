import { Post } from '@domain/entities'

export namespace CreatePostUseCase {
	export type Params = {
		text: string
		user: string
	}
}

export interface CreatePostUseCase {
	createPost(data: CreatePostUseCase.Params): Promise<Post>
}
