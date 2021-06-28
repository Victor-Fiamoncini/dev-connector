import { FetchPostRepository } from '@data/contracts'
import { Post } from '@domain/entities'
import { PostNotFoundError } from '@domain/errors'
import { FetchPostUseCase } from '@domain/usecases'

export class FetchPostService implements FetchPostUseCase {
	constructor(private readonly fetchPostRepository: FetchPostRepository) {}

	async fetchPost(id: string): Promise<Post> {
		const post = (await this.fetchPostRepository.fetchPost(id)) || null

		if (!post) {
			throw new PostNotFoundError()
		}

		return post
	}
}
