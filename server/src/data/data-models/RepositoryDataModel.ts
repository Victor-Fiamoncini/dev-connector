import { User } from '@domain/entities'

export class RepositoryDataModel {
	private static repositoryDataModels: RepositoryDataModel[] = []

	constructor(private readonly props: User.Repository) {}

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
