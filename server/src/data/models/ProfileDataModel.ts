import { Profile } from '@domain/entities'

export namespace ProfileDataModel {
	export type ProfileDataModelWithUser = ProfileDataModel & {
		user: {
			name: string
			avatar: string
		}
	}
}

export type ProfileDataModel = Profile
