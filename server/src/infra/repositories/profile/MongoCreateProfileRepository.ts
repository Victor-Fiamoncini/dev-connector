import { CreateProfileRepository } from '@data/contracts'
import { ProfileDataModel } from '@data/models'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoCreateProfileRepository implements CreateProfileRepository {
	async createProfile(
		data: CreateProfileRepository.Params
	): Promise<ProfileDataModel> {
		const createdProfile = await ProfileMongoDataSource.create(data)

		return {
			id: createdProfile.id,
			company: createdProfile.company,
			website: createdProfile.website,
			location: createdProfile.location,
			status: createdProfile.status,
			skills: createdProfile.skills,
			bio: createdProfile.bio,
			githubusername: createdProfile.githubusername,
			social: {
				youtube: createdProfile.social.youtube,
				instagram: createdProfile.social.instagram,
				linkedin: createdProfile.social.linkedin,
				facebook: createdProfile.social.facebook,
				twitter: createdProfile.social.twitter,
			},
			education: createdProfile.education,
			experience: createdProfile.experience,
			user: createdProfile.user,
			created_at: createdProfile.createdAt,
			update_at: createdProfile.updatedAt,
		}
	}
}
