import { User } from '@domain/entities'

export namespace RepositoryDataModel {
	export type Props = User.Repository
}

export class RepositoryDataModel {
	private static repositoryDataModels: RepositoryDataModel[] = []

	constructor(private readonly props: RepositoryDataModel.Props) {}

	static fromJsonColletion(jsonModels: any[]) {
		this.repositoryDataModels = jsonModels.map(jsonModel => {
			return new RepositoryDataModel({
				id: jsonModel['id'] as number,
				name: jsonModel['name'] as string,
			})
		})

		return this
	}

	static toDomainCollection() {
		return this.repositoryDataModels.map(repositoryDataModel => {
			return {
				id: repositoryDataModel.props.id,
				name: repositoryDataModel.props.name,
			}
		}) as User.Repository[]
	}
}
