import { DeleteExperienceUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'

namespace DeleteExperienceController {
	export type BodyParams = {
		user: {
			id: string
		}
	}

	export type UrlParams = {
		id: string
	}
}

export class DeleteExperienceController implements Controller {
	constructor(
		private readonly deleteExperienceUseCase: DeleteExperienceUseCase
	) {}

	async handle(
		httpResquest: HttpResquest<
			DeleteExperienceController.BodyParams,
			DeleteExperienceController.UrlParams
		>
	) {
		const { body, params } = httpResquest

		try {
			await this.deleteExperienceUseCase.deleteExperience({
				experience: params.id,
				user: body.user.id,
			})

			return HttpResponse.noContent()
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
