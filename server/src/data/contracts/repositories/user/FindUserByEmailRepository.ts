import { UserDataModel } from '@data/data-models'

export interface FindUserByEmailRepository {
	findUserByEmail(email: string): Promise<UserDataModel | null>
}
