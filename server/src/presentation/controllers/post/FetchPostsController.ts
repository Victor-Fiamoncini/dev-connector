import { FetchPostsUseCase } from '@domain/usecases'

import { Controller, HttpResponse } from '@presentation/contracts'

export class FetchPostsController implements Controller {
	constructor(private readonly fetchPostsUseCase: FetchPostsUseCase) {}

	async handle() {
		try {
			const posts = await this.fetchPostsUseCase.fetchPosts()

			return HttpResponse.ok(posts)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
