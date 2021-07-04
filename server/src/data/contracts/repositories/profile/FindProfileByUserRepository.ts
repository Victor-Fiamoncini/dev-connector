import { ProfileDataModel } from '@data/models'

export interface FindProfileByUserRepository {
	findProfileByUser(user: string): Promise<ProfileDataModel | null>
}
