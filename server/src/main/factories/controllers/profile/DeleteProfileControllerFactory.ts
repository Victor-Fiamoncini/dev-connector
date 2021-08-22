import { DeleteProfileService } from '@data/services'
import {
	MongoDeleteProfileRepository,
	MongoDeleteUserRepository,
} from '@infra/repositories'
import { Controller } from '@presentation/contracts'
import { DeleteProfileController } from '@presentation/controllers'

export class DeleteProfileControllerFactory {
	static make(): Controller {
		const deleteProfileRepository = new MongoDeleteProfileRepository()
		const deleteUserRepository = new MongoDeleteUserRepository()

		const deleteProfileService = new DeleteProfileService(
			deleteProfileRepository,
			deleteUserRepository
		)

		return new DeleteProfileController(deleteProfileService)
	}
}
