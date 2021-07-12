import {
	FindProfileByUserRepository,
	FindProfileByUserWithUserDecorator,
	FindUserByIdRepository,
} from '@data/contracts'
import { ProfileDataModel } from '@data/models'

export class FindProfileByUserWithUserDecoratorImpl extends FindProfileByUserWithUserDecorator {
	constructor(
		findProfileByUserRepository: FindProfileByUserRepository,
		findUserByIdRepository: FindUserByIdRepository
	) {
		super(findProfileByUserRepository, findUserByIdRepository)
	}

	async findProfileByUser(
		user: string
	): Promise<ProfileDataModel.ProfileDataModelWithUser | null> {
		const profile = await this.findProfileByUserRepository.findProfileByUser(
			user
		)

		const userById = await this.findUserByIdRepository.findUserById(user)

		if (!userById) {
			return {
				...profile,
				user: {
					name: '',
					avatar: '',
				},
			}
		}

		return {
			...profile,
			user: {
				name: userById?.name,
				avatar: userById?.avatar,
			},
		}
	}
}
