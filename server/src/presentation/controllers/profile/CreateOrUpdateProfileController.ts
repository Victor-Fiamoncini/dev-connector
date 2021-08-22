import { CreateOrUpdateProfileUseCase } from '@domain/usecases'

import { Controller, HttpResponse, HttpResquest } from '@presentation/contracts'
import { CreateOrUpdateProfileModel } from '@presentation/models'

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
		httpResquest: HttpResquest<CreateOrUpdateProfileController.Params, null>
	): Promise<HttpResponse<CreateOrUpdateProfileModel>> {
		try {
			const { body } = httpResquest

			const profile = await this.createOrUpdateProfileUseCase.createOrUpdateProfile(
				{
					...body,
					user: body.user.id,
				}
			)

			return HttpResponse.ok(CreateOrUpdateProfileModel.map(profile))
		} catch (err) {
			return HttpResponse.serverError(err)
		}
	}
}
