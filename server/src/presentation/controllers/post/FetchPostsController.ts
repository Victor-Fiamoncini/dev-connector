import { FetchPostsUseCase } from '@domain/usecases'

import { Controller, HttpResponse } from '@presentation/contracts'
import { PostViewModel } from '@presentation/view-models'

export class FetchPostsController implements Controller {
	constructor(private readonly fetchPostsUseCase: FetchPostsUseCase) {}

	async handle() {
		try {
			const posts = await this.fetchPostsUseCase.fetchPosts()

			return HttpResponse.ok(PostViewModel.mapColletion(posts))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
