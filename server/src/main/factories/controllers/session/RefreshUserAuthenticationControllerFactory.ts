import { RefreshUserAuthenticationService } from '@data/services'

import { MongoFindUserByIdRepository } from '@infra/repositories'

import { Controller } from '@presentation/contracts'
import { RefreshUserAuthenticationController } from '@presentation/controllers'

export class RefreshUserAuthenticationControllerFactory {
	static make(): Controller {
		const findUserByIdRepository = new MongoFindUserByIdRepository()

		const refreshUserAuthenticationService = new RefreshUserAuthenticationService(
			findUserByIdRepository
		)

		return new RefreshUserAuthenticationController(
			refreshUserAuthenticationService
		)
	}
}
