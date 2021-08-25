import { FetchPostsRepository } from '@data/contracts'
import { PostDataModel } from '@data/data-models'

import { FetchPostsUseCase } from '@domain/usecases'

export class FetchPostsService implements FetchPostsUseCase {
	constructor(private readonly fetchPostsRepository: FetchPostsRepository) {}

	async fetchPosts() {
		const posts = await this.fetchPostsRepository.fetchPosts()

		return PostDataModel.fromDatabaseColletion(posts).toDomainColletion()
	}
}
