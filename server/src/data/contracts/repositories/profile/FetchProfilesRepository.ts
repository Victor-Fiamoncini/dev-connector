import { ProfileDataModel } from '@data/models'

export interface FetchProfilesRepository {
	fetchProfiles(): Promise<ProfileDataModel[]>
}
