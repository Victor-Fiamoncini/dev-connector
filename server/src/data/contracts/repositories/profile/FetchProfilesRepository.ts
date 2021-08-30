import { ProfileDataModel } from '@data/data-models'

export namespace FetchProfilesRepository {
	export type Return = {
		id: string
		company: string
		website: string
		location: string
		status: string
		skills: string[]
		bio: string
		githubusername: string
		experience: ProfileDataModel.Props['experience']
		education: ProfileDataModel.Props['education']
		social: ProfileDataModel.Props['social']
		user: {
			name: string
			avatar: string
		}
	}
}

export interface FetchProfilesRepository {
	execute(): Promise<FetchProfilesRepository.Return[]>
}
