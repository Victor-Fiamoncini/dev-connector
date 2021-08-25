import {
	DeletePostRepository,
	FindPostByIdRepository,
	FindUserByIdRepository,
} from '@data/contracts'
import { PostDataModel } from '@data/data-models'

import { PostDeleteError, PostNotFoundError } from '@domain/errors'
import { DeletePostUseCase } from '@domain/usecases'

import { UnauthorizedError } from '@utils/errors'

export class DeletePostService implements DeletePostUseCase {
	constructor(
		private readonly findUserByIdRepository: FindUserByIdRepository,
		private readonly findPostByIdRepository: FindPostByIdRepository,
		private readonly deletePostRepository: DeletePostRepository
	) {}

	async deletePost(data: DeletePostUseCase.Params) {
		const userById = await this.findUserByIdRepository.findUserById(data.user)

		if (!userById) {
			throw new UnauthorizedError()
		}

		const postByIdFromDatabase = await this.findPostByIdRepository.findPostById(
			data.post
		)

		if (!postByIdFromDatabase) {
			throw new PostNotFoundError()
		}

		const postById = PostDataModel.fromDatabase(postByIdFromDatabase).toDomain()

		if (
			String(postById.user) !== data.user ||
			data.user !== String(userById.id)
		) {
			throw new UnauthorizedError()
		}

		const post = await this.deletePostRepository.deletePost(postById.id)

		if (!post) {
			throw new PostDeleteError()
		}

		return PostDataModel.fromDatabase(post).toDomain()
	}
}
