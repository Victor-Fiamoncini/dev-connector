import { FetchPostUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { PostViewModel } from '@presentation/view-models'

namespace FetchPostController {
	export type Params = {
		id: string
	}
}

export class FetchPostController implements Controller {
	constructor(private readonly fetchPostUseCase: FetchPostUseCase) {}

	async handle(httpRequest: HttpResquest<null, FetchPostController.Params>) {
		try {
			const { id } = httpRequest.params

			const post = await this.fetchPostUseCase.fetchPost(id)

			return HttpResponse.ok(PostViewModel.map(post))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
