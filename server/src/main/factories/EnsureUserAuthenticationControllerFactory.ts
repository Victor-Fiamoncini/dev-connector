import { EnsureUserAuthenticationService } from '@data/services'
import {
	BcryptHashComparatorAdapter,
	JwtTokenGeneratorAdapter,
} from '@infra/adapters'
import { MongoFindUserByEmailRepository } from '@infra/repositories'
import env from '@main/config/env'
import { Controller } from '@presentation/contracts'
import { EnsureUserAuthenticationController } from '@presentation/controllers'

export class EnsureUserAuthenticationControllerFactory {
	static make(): Controller {
		const findUserByEmailRepository = new MongoFindUserByEmailRepository()
		const hashComparatorAdapter = new BcryptHashComparatorAdapter()

		const ensureUserAuthenticationService = new EnsureUserAuthenticationService(
			findUserByEmailRepository,
			hashComparatorAdapter
		)

		const tokenGeneratorAdapter = new JwtTokenGeneratorAdapter(
			env.jwt.secret,
			env.jwt.expires
		)

		return new EnsureUserAuthenticationController(
			ensureUserAuthenticationService,
			tokenGeneratorAdapter
		)
	}
}
