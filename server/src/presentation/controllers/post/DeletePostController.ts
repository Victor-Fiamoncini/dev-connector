import { DeletePostUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { PostViewModel } from '@presentation/view-models'

namespace DeletePostController {
	export type BodyParams = {
		user: {
			id: string
		}
	}

	export type UrlParams = {
		id: string
	}
}

export class DeletePostController implements Controller {
	constructor(private readonly deletePostUseCase: DeletePostUseCase) {}

	async handle(
		httpRequest: HttpResquest<
			DeletePostController.BodyParams,
			DeletePostController.UrlParams
		>
	) {
		try {
			const { id } = httpRequest.params
			const { user } = httpRequest.body

			const deletedPost = await this.deletePostUseCase.deletePost({
				post: id,
				user: user.id,
			})

			return HttpResponse.ok(PostViewModel.map(deletedPost))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
