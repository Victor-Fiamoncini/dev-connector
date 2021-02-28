import {
	FindUserByEmailRepository,
	HashComparatorAdapter,
} from '@data/contracts'
import { User } from '@domain/entities'
import { InvalidCredentialsError } from '@domain/errors'
import { EnsureUserAuthenticationUseCase } from '@domain/usecases'

// prettier-ignore
export class EnsureUserAuthenticationService implements EnsureUserAuthenticationUseCase {
	constructor(
		private readonly findUserByEmailRepository: FindUserByEmailRepository,
		private readonly hashComparatorAdapter: HashComparatorAdapter
	) {}

	async ensureAuthentication(
		data: EnsureUserAuthenticationUseCase.Params
	): Promise<User> {
		const userByEmail = await this.findUserByEmailRepository.findUserByEmail(
			data.email
		)

		if (!userByEmail) {
			throw new InvalidCredentialsError()
		}

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
