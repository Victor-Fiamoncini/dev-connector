import { CreateOrUpdateProfileUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'

namespace CreateOrUpdateProfileController {
	export type Params = {
		company: string
		website: string
		location: string
		status: string
		skills: string
		bio: string
		githubusername: string
		social: {
			youtube: string
			instagram: string
			linkedin: string
			facebook: string
			twitter: string
		}
		user: {
			id: string
		}
	}
}

export class CreateOrUpdateProfileController implements Controller {
	constructor(
		private readonly createOrUpdateProfileUseCase: CreateOrUpdateProfileUseCase
	) {}

	async handle(
		httpResquest: HttpResquest<CreateOrUpdateProfileController.Params>
	) {
		const { body } = httpResquest

		try {
			const profile = await this.createOrUpdateProfileUseCase.run({
				...body,
				user: body.user.id,
			})

			return HttpResponse.ok(profile)
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
