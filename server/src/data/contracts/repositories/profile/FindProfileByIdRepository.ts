import { ProfileDataModel } from '@data/data-models'

export interface FindProfileByIdRepository {
	findProfileById(id: string): Promise<ProfileDataModel.Props | null>
}
