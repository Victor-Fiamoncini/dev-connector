import { CreatePostRepository, FindUserByIdRepository } from '@data/contracts'
import { PostDataModel } from '@data/data-models'

import { CreatePostUseCase } from '@domain/usecases'

import { UnauthorizedError } from '@utils/errors'

export class CreatePostService implements CreatePostUseCase {
	constructor(
		private readonly findUserByIdRepository: FindUserByIdRepository,
		private readonly createPostRepository: CreatePostRepository
	) {}

	async createPost(data: CreatePostUseCase.Params) {
		const userById = await this.findUserByIdRepository.findUserById(data.user)

		if (!userById) {
			throw new UnauthorizedError()
		}

		const post = await this.createPostRepository.createPost({
			name: userById.name,
			text: data.text,
			avatar: userById.avatar,
			user: data.user,
		})

		return PostDataModel.fromDatabase(post).toDomain()
	}
}
