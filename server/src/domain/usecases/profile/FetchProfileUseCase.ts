import { Profile } from '@domain/entities'

export interface FetchProfileUseCase {
	fetchProfile(id: string): Promise<Profile>
}
