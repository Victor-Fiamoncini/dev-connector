import { User } from '@domain/entities'

export namespace UserDataModel {
	export type Props = User
}

export class UserDataModel {
	constructor(private readonly props: UserDataModel.Props) {}

	static fromDatabase(databaseModel: any) {
		return new UserDataModel({
			id: databaseModel['id'] as string,
			name: databaseModel['name'] as string,
			email: databaseModel['email'] as string,
			password: databaseModel['password'] as string,
			avatar: databaseModel['avatar'] as string,
			created_at: databaseModel['createdAt'] as Date,
			update_at: databaseModel['updateAt'] as Date,
		})
	}

	toDomain() {
		return new User(
			this.props.id,
			this.props.name,
			this.props.email,
			this.props.password,
			this.props.avatar,
			this.props.created_at,
			this.props.update_at
		)
	}
}
