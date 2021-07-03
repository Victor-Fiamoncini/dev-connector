import { Post } from '@domain/entities'

export namespace DeletePostUseCase {
	export type Params = {
		post: string
		user: string
	}
}

export interface DeletePostUseCase {
	deletePost(data: DeletePostUseCase.Params): Promise<Post>
}
