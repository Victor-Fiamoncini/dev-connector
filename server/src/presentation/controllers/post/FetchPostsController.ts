import { FetchPostsUseCase } from '@domain/usecases'

import { Controller, HttpResponse } from '@presentation/contracts'
import { FetchPostsModel } from '@presentation/models'

export class FetchPostsController implements Controller {
	constructor(private readonly fetchPostsUseCase: FetchPostsUseCase) {}

	async handle(): Promise<HttpResponse<FetchPostsModel[]>> {
		try {
			const posts = await this.fetchPostsUseCase.fetchPosts()

			return HttpResponse.ok(FetchPostsModel.mapColletion(posts))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
