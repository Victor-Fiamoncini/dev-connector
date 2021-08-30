import { Profile } from '@domain/entities'

export namespace FetchProfileUseCase {
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

export interface FetchProfileUseCase {
	run(id: string): Promise<FetchProfileUseCase.Return>
}
