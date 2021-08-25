import {
	FindUserByEmailRepository,
	HashComparatorAdapter,
} from '@data/contracts'
import { UserDataModel } from '@data/data-models'

import { InvalidCredentialsError } from '@domain/errors'
import { EnsureUserAuthenticationUseCase } from '@domain/usecases'

// prettier-ignore
export class EnsureUserAuthenticationService implements EnsureUserAuthenticationUseCase {
	constructor(
		private readonly findUserByEmailRepository: FindUserByEmailRepository,
		private readonly hashComparatorAdapter: HashComparatorAdapter
	) {}

	async ensureAuthentication(data: EnsureUserAuthenticationUseCase.Params) {
		const userByEmailFromDatabase = await this.findUserByEmailRepository.findUserByEmail(
			data.email
		)

		if (!userByEmailFromDatabase) {
			throw new InvalidCredentialsError()
		}

		const userByEmail = UserDataModel.fromDatabase(
			userByEmailFromDatabase
		).toDomain()

		const isPasswordValid = await this.hashComparatorAdapter.adapt(
			data.password,
			userByEmail.password
		)

		if (!isPasswordValid) {
			throw new InvalidCredentialsError()
		}

		return userByEmail
	}
}
