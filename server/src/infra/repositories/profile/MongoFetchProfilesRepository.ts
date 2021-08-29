import { FetchProfilesRepository } from '@data/contracts'

import { ProfileMongoDataSource } from '@infra/databases/mongo'

export class MongoFetchProfilesRepository implements FetchProfilesRepository {
	async fetchProfiles() {
		const profiles = await ProfileMongoDataSource.find()
			.select('id status skills experience education social')
			.populate('user', ['name', 'avatar'])
			.sort({ date: -1 })

		return profiles.map(profile => ({
			id: profile.id,
			company: profile.company,
			website: profile.website,
			location: profile.location,
			status: profile.status,
			skills: profile.skills,
			bio: profile.bio,
			githubusername: profile.githubusername,
			experience: profile.experience,
			education: profile.education,
			social: profile.social,
			user: profile.user,
		})) as FetchProfilesRepository.Return[]
	}
}
