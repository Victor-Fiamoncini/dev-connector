import { Profile } from '@domain/entities'

export interface FetchUserProfileUseCase {
	fetchUserProfile(user: string): Promise<Profile>
}
