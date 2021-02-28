import {
	FindUserByEmailRepository,
	HashComparatorAdapter,
} from '@data/contracts'
import { User } from '@domain/entities'
import { UnauthorizedError } from '@domain/errors'
import { CreateUserSessionUseCase } from '@domain/usecases'

export class CreateUserSessionService implements CreateUserSessionUseCase {
	constructor(
		private readonly findUserByEmailRepository: FindUserByEmailRepository,
		private readonly hashComparatorAdapter: HashComparatorAdapter
	) {}

	async createSession(data: CreateUserSessionUseCase.Params): Promise<User> {
		const userByEmail = await this.findUserByEmailRepository.findUserByEmail(
			data.email
		)

		if (!userByEmail) {
			throw new UnauthorizedError()
		}

		const isPasswordValid = await this.hashComparatorAdapter.adapt(
			data.password,
			userByEmail.password
		)

		if (!isPasswordValid) {
			throw new UnauthorizedError()
		}
	}
}
