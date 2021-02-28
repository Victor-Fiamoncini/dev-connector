import { UserDataModel } from '@data/models'

export interface FindUserByIdRepository {
	findUserById(id: string): Promise<UserDataModel | null>
}
