import {
	DeletePostRepository,
	FindPostByIdRepository,
	FindUserByIdRepository,
} from '@data/contracts'
import { Post } from '@domain/entities'
import { PostNotFoundError } from '@domain/errors'
import { DeletePostUseCase } from '@domain/usecases'
import { UnauthorizedError } from '@utils/errors'

export class DeletePostService implements DeletePostUseCase {
	constructor(
		private readonly findUserByIdRepository: FindUserByIdRepository,
		private readonly findPostByIdRepository: FindPostByIdRepository,
		private readonly deletePostRepository: DeletePostRepository
	) {}

	async deletePost(data: DeletePostUseCase.Params): Promise<Post> {
		const userById = await this.findUserByIdRepository.findUserById(data.user)

		if (!userById) {
			throw new UnauthorizedError()
		}

		const postById = await this.findPostByIdRepository.findPostById(data.post)

		if (!postById) {
			throw new UnauthorizedError()
		}

		if (userById.id !== postById.user) {
			throw new PostNotFoundError()
		}

		const post = await this.deletePostRepository.deletePost(postById.id)

		return post
	}
}
