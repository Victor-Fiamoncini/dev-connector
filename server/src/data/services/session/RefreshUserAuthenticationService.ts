import { FindUserByIdRepository } from '@data/contracts'
import { UserDataModel } from '@data/data-models'

import { RefreshUserAuthenticationUseCase } from '@domain/usecases'

import { UnauthorizedError } from '@utils/errors'

// prettier-ignore
export class RefreshUserAuthenticationService implements RefreshUserAuthenticationUseCase {
	constructor(
		private readonly findUserByIdRepository: FindUserByIdRepository
	) {}

	async refreshAuthentication(id: string) {
		const userById = await this.findUserByIdRepository.findUserById(id)

		if (!userById) {
			throw new UnauthorizedError()
		}

		return UserDataModel.fromDatabase(userById).toDomain()
	}
}
