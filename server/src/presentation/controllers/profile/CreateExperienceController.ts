import { CreateExperienceUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { ProfileViewModel } from '@presentation/view-models'

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
		try {
			const { body } = httpResquest

			const profileWithNewExperience = await this.createExperienceUseCase.createExperience(
				{
					...body,
					user: body.user.id,
				}
			)

			return HttpResponse.created(
				ProfileViewModel.map(profileWithNewExperience)
			)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
