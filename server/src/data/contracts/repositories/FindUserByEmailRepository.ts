import { UserDataModel } from '@data/models'

export interface FindUserByEmailRepository {
	findUserByEmail(email: string): Promise<UserDataModel | null>
}
