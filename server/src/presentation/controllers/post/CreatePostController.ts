import { CreatePostUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'

namespace CreatePostController {
	export type Params = {
		text: string
		user: {
			id: string
		}
	}
}

export class CreatePostController implements Controller {
	constructor(private readonly createPostUseCase: CreatePostUseCase) {}

	async handle(httpRequest: HttpResquest<CreatePostController.Params>) {
		const { body } = httpRequest

		try {
			const post = await this.createPostUseCase.createPost({
				text: body.text,
				user: body.user.id,
			})

			return HttpResponse.created(post)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
