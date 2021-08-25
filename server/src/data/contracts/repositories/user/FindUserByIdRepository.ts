import { UserDataModel } from '@data/data-models'

export interface FindUserByIdRepository {
	findUserById(id: string): Promise<UserDataModel | null>
}
