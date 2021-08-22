import {
	FindProfileByUserRepository,
	FindUserByIdRepository,
} from '@data/contracts/repositories'
import { ProfileDataModel } from '@data/models'

// prettier-ignore
export abstract class FindProfileByUserWithUserDecorator implements FindProfileByUserRepository {
	constructor(
		protected readonly findProfileByUserRepository: FindProfileByUserRepository,
		protected readonly findUserByIdRepository: FindUserByIdRepository
	) {}

	abstract findProfileByUser(user: string): Promise<ProfileDataModel | null>
}
