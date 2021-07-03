import { FindPostByIdRepository } from '@data/contracts'
import { Post } from '@domain/entities'
import { PostNotFoundError } from '@domain/errors'
import { FetchPostUseCase } from '@domain/usecases'

export class FetchPostService implements FetchPostUseCase {
	constructor(
		private readonly findPostByIdRepository: FindPostByIdRepository
	) {}

	async fetchPost(id: string): Promise<Post> {
		const post = (await this.findPostByIdRepository.findPostById(id)) || null

		if (!post) {
			throw new PostNotFoundError()
		}

		return post
	}
}
