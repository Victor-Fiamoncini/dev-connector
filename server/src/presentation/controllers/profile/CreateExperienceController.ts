import { CreateExperienceUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'

namespace CreateExperienceController {
	export type Params = {
		title: string
		company: string
		location: string
		from: Date
		to: Date
		current: boolean
		description: string
		user: {
			id: string
		}
	}
}

export class CreateExperienceController implements Controller {
	constructor(
		private readonly createExperienceUseCase: CreateExperienceUseCase
	) {}

	async handle(httpResquest: HttpResquest<CreateExperienceController.Params>) {
		const { body } = httpResquest

		try {
			const profileWithNewExperience = await this.createExperienceUseCase.run({
				...body,
				user: body.user.id,
			})

			return HttpResponse.created(profileWithNewExperience)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
