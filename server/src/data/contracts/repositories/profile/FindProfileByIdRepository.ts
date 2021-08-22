import { ProfileDataModel } from '@data/models'

export interface FindProfileByIdRepository {
	findProfileById(id: string): Promise<ProfileDataModel | null>
}
