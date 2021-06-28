import { FetchPostsRepository } from '@data/contracts'
import { Post } from '@domain/entities'
import { FetchPostsUseCase } from '@domain/usecases'

export class FetchPostsService implements FetchPostsUseCase {
	constructor(private readonly fetchPostsRepository: FetchPostsRepository) {}

	async fetchPosts(): Promise<Post[]> {
		const posts = await this.fetchPostsRepository.fetchPosts()

		return posts || []
	}
}
