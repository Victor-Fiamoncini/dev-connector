import { FindPostByIdRepository } from '@data/contracts'
import { PostDataModel } from '@data/data-models'

import { PostNotFoundError } from '@domain/errors'
import { FetchPostUseCase } from '@domain/usecases'

export class FetchPostService implements FetchPostUseCase {
	constructor(
		private readonly findPostByIdRepository: FindPostByIdRepository
	) {}

	async fetchPost(id: string) {
		const post = (await this.findPostByIdRepository.findPostById(id)) || null

		if (!post) {
			throw new PostNotFoundError()
		}

		return PostDataModel.fromDatabase(post).toDomain()
	}
}
