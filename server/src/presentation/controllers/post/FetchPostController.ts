import { FetchPostUseCase } from '@domain/usecases'
import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { FetchPostModel } from '@presentation/models'

namespace FetchPostController {
	export type Params = {
		id: string
	}
}

export class FetchPostController implements Controller {
	constructor(private readonly fetchPostUseCase: FetchPostUseCase) {}

	async handle(
		httpRequest: HttpResquest<FetchPostController.Params>
	): Promise<HttpResponse<FetchPostModel>> {
		try {
			const post = await this.fetchPostUseCase.fetchPost(httpRequest.body.id)

			const presentedPost = {
				id: post.id,
				name: post.name,
				text: post.text,
				avatar: post.avatar,
				likes: post.likes,
				comments: post.comments,
				user: post.user,
			}

			return HttpResponse.ok(presentedPost as FetchPostModel)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
