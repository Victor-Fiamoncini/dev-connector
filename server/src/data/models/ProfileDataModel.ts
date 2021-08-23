import { Profile } from '@domain/entities'

export class ProfileDataModel {
	private static profileDataModels: ProfileDataModel[] = []

	constructor(private readonly props: Profile) {}

	static fromDatabase(databaseModel: any) {
		return new ProfileDataModel({
			id: databaseModel['id'] as string,
			company: databaseModel['company'] as string,
			website: databaseModel['website'] as string,
			location: databaseModel['location'] as string,
			status: databaseModel['status'] as string,
			skills: databaseModel['skills'] as string[],
			bio: databaseModel['bio'] as string,
			githubusername: databaseModel['githubusername'] as string,
			experience: databaseModel['experience'] as Profile.Experience[],
			education: databaseModel['education'] as Profile.Education[],
			social: databaseModel['social'] as Profile.Social,
			user: databaseModel['user'] as string,
			created_at: databaseModel['createdAt'] as Date,
			update_at: databaseModel['updatedAt'] as Date,
		})
	}

	static fromDatabaseColletion(databaseModels: any[]) {
		this.profileDataModels = databaseModels.map(databaseModel => {
			return new ProfileDataModel({
				id: databaseModel['id'] as string,
				company: databaseModel['company'] as string,
				website: databaseModel['website'] as string,
				location: databaseModel['location'] as string,
				status: databaseModel['status'] as string,
				skills: databaseModel['skills'] as string[],
				bio: databaseModel['bio'] as string,
				githubusername: databaseModel['githubusername'] as string,
				experience: databaseModel['experience'] as Profile.Experience[],
				education: databaseModel['education'] as Profile.Education[],
				social: databaseModel['social'] as Profile.Social,
				user: databaseModel['user'] as string,
				created_at: databaseModel['createdAt'] as Date,
				update_at: databaseModel['updatedAt'] as Date,
			})
		})

		return this
	}

	toDomain() {
		return new Profile(
			this.props.id,
			this.props.company,
			this.props.website,
			this.props.location,
			this.props.status,
			this.props.skills,
			this.props.bio,
			this.props.githubusername,
			this.props.experience,
			this.props.education,
			this.props.social,
			this.props.user,
			this.props.created_at,
			this.props.update_at
		)
	}

	static toDomainColletion() {
		return this.profileDataModels.map(profileDataModel => {
			return new Profile(
				profileDataModel.props.id,
				profileDataModel.props.company,
				profileDataModel.props.website,
				profileDataModel.props.location,
				profileDataModel.props.status,
				profileDataModel.props.skills,
				profileDataModel.props.bio,
				profileDataModel.props.githubusername,
				profileDataModel.props.experience,
				profileDataModel.props.education,
				profileDataModel.props.social,
				profileDataModel.props.user,
				profileDataModel.props.created_at,
				profileDataModel.props.update_at
			)
		})
	}
}
