import { ProfileDataModel } from '@data/data-models'

export interface FetchProfilesRepository {
	fetchProfiles(): Promise<ProfileDataModel.Props[]>
}
