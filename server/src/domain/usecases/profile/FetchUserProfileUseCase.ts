import { Profile } from '@domain/entities'

export namespace FetchUserProfileUseCase {
	export type Return = {
		id: string
		company: string
		website: string
		location: string
		status: string
		skills: string[]
		bio: string
		githubusername: string
		experience: Profile['experience']
		education: Profile['education']
		social: Profile['social']
		user: {
			name: string
			avatar: string
		}
	}
}

export interface FetchUserProfileUseCase {
	run(user: string): Promise<FetchUserProfileUseCase.Return>
}
