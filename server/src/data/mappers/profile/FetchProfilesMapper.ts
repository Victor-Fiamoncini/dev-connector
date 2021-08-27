import { FetchProfilesRepository as Repository } from '@data/contracts'

import { FetchProfilesUseCase as UseCase } from '@domain/usecases'

export class FetchProfilesMapper {
	static fromInfraCollection(profiles: any[]): Repository.Return[] {
		return profiles.map(infraProfile => ({
			id: infraProfile.id as string,
			company: infraProfile.company as string,
			website: infraProfile.website as string,
			location: infraProfile.location as string,
			status: infraProfile.status as string,
			skills: infraProfile.skills as string[],
			bio: infraProfile.bio as string,
			githubusername: infraProfile.githubusername as string,
			experience: infraProfile.experience as Repository.Return['experience'],
			education: infraProfile.education as Repository.Return['education'],
			social: infraProfile.social as Repository.Return['social'],
			user: {
				name: infraProfile.user.name as string,
				avatar: infraProfile.user.avatar as string,
			},
		}))
	}

	static toDomainColletion(profiles: Repository.Return[]): UseCase.Return[] {
		return profiles.map(dataProfile => ({
			id: dataProfile.id as string,
			company: dataProfile.company as string,
			website: dataProfile.website as string,
			location: dataProfile.location as string,
			status: dataProfile.status as string,
			skills: dataProfile.skills as string[],
			bio: dataProfile.bio as string,
			githubusername: dataProfile.githubusername as string,
			experience: (dataProfile.experience as unknown) as UseCase.Return['experience'],
			education: (dataProfile.education as unknown) as UseCase.Return['education'],
			social: dataProfile.social as UseCase.Return['social'],
			user: {
				name: dataProfile.user.name as string,
				avatar: dataProfile.user.avatar as string,
			},
		}))
	}
}
