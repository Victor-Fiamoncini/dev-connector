import { ProfileDataModel } from '@data/data-models'

export interface FindProfileByUserRepository {
	findProfileByUser(user: string): Promise<ProfileDataModel.Props | null>
}
