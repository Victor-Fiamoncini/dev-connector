import { Post } from '@domain/entities'

export interface FetchPostUseCase {
	fetchPost(id: string): Promise<Post>
}
