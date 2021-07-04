import { Profile } from '@domain/entities'

export interface FetchProfilesUseCase {
	fetchProfiles(): Promise<Profile[]>
}
