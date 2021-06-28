import { Post } from '@domain/entities'

export interface FetchPostsUseCase {
	fetchPosts(): Promise<Post[]>
}
