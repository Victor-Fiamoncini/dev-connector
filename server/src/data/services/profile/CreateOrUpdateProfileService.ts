import {
	CreateProfileRepository,
	FindProfileByUserRepository,
	UpdateProfileRepository,
} from '@data/contracts'

import { ProfileUpdateError } from '@domain/errors'
import { CreateOrUpdateProfileUseCase } from '@domain/usecases'

// prettier-ignore
export class CreateOrUpdateProfileService implements CreateOrUpdateProfileUseCase {
	constructor(
		private readonly findProfileByUserRepository: FindProfileByUserRepository,
		private readonly updateProfileRepository: UpdateProfileRepository,
		private readonly createProfileRepository: CreateProfileRepository
	) {}

	async run(data: CreateOrUpdateProfileUseCase.Params) {
		const { skills } = data

		let serializedSkills: string[] = []

		if (skills) {
			serializedSkills = skills.split(',').map(skill => skill.trim())
		}

		const profile = await this.findProfileByUserRepository.execute(
			data.user
		)

		if (profile) {
			const updatedProfile = await this.updateProfileRepository.execute({
				...data,
				id: profile.id,
				skills: serializedSkills,
			})

			if (!updatedProfile) {
				throw new ProfileUpdateError()
			}

			return updatedProfile
		}

		const createdProfile = await this.createProfileRepository.execute({
			...data,
			skills: serializedSkills,
		})

		return createdProfile
	}
}
