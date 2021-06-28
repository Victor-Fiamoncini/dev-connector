import { FindUserByIdRepository } from '@data/contracts'
import { User } from '@domain/entities'
import { UnauthorizedError } from '@utils/errors'
import { RefreshUserAuthenticationUseCase } from '@domain/usecases'

// prettier-ignore
export class RefreshUserAuthenticationService implements RefreshUserAuthenticationUseCase {
	constructor(
		private readonly findUserByIdRepository: FindUserByIdRepository,
	) {}

	async refreshAuthentication(id: string): Promise<User> {
		const userById = await this.findUserByIdRepository.findUserById(id)

		if (!userById) {
			throw new UnauthorizedError()
		}

		return userById
	}
}
