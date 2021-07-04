import { UpdateProfileRepository } from '@data/contracts'
import { ProfileDataModel } from '@data/models'
import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoUpdateProfileRepository implements UpdateProfileRepository {
	async updateProfile(
		data: UpdateProfileRepository.Params
	): Promise<ProfileDataModel | null> {
		const { id, ...updateData } = data

		const updatedProfile = await ProfileMongoDataSource.findByIdAndUpdate(
			id,
			updateData,
			{
				new: true,
				runValidators: true,
			}
		)

		if (!updatedProfile) {
			return null
		}

		return {
			id: updatedProfile.id,
			company: updatedProfile.company,
			website: updatedProfile.website,
			location: updatedProfile.location,
			status: updatedProfile.status,
			skills: updatedProfile.skills,
			bio: updatedProfile.bio,
			githubusername: updatedProfile.githubusername,
			social: {
				youtube: updatedProfile.social.youtube,
				instagram: updatedProfile.social.instagram,
				linkedin: updatedProfile.social.linkedin,
				facebook: updatedProfile.social.facebook,
				twitter: updatedProfile.social.twitter,
			},
			education: updatedProfile.education,
			experience: updatedProfile.experience,
			user: updatedProfile.user,
			created_at: updatedProfile.createdAt,
			update_at: updatedProfile.updatedAt,
		}
	}
}
