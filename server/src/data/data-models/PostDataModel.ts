import { Post } from '@domain/entities'

export namespace PostDataModel {
	export type Props = Post
}

export class PostDataModel {
	private static postDataModels: PostDataModel[] = []

	constructor(private readonly props: PostDataModel.Props) {}

	static fromDatabase(databaseModel: any) {
		return new PostDataModel({
			id: databaseModel['id'] as string,
			name: databaseModel['name'] as string,
			text: databaseModel['text'] as string,
			avatar: databaseModel['avatar'] as string,
			likes: databaseModel['likes'] as Post.Like[],
			comments: databaseModel['comments'] as Post.Comment[],
			user: databaseModel['user'] as string,
			created_at: databaseModel['createdAt'] as Date,
			update_at: databaseModel['updateAt'] as Date,
		})
	}

	static fromDatabaseColletion(databaseModels: any[]) {
		this.postDataModels = databaseModels.map(databaseModel => {
			return new PostDataModel({
				id: databaseModel['id'] as string,
				name: databaseModel['name'] as string,
				text: databaseModel['text'] as string,
				avatar: databaseModel['avatar'] as string,
				likes: databaseModel['likes'] as Post.Like[],
				comments: databaseModel['comments'] as Post.Comment[],
				user: databaseModel['user'] as string,
				created_at: databaseModel['createdAt'] as Date,
				update_at: databaseModel['updateAt'] as Date,
			})
		})

		return this
	}

	toDomain() {
		return new Post(
			this.props.id,
			this.props.name,
			this.props.text,
			this.props.avatar,
			this.props.likes,
			this.props.comments,
			this.props.user,
			this.props.created_at,
			this.props.update_at
		)
	}

	static toDomainColletion() {
		return this.postDataModels.map(profileDataModel => {
			return new Post(
				profileDataModel.props.id,
				profileDataModel.props.name,
				profileDataModel.props.text,
				profileDataModel.props.avatar,
				profileDataModel.props.likes,
				profileDataModel.props.comments,
				profileDataModel.props.user,
				profileDataModel.props.created_at,
				profileDataModel.props.update_at
			)
		})
	}
}
