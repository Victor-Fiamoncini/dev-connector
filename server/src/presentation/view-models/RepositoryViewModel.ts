import { User } from '@domain/entities'

export class RepositoryViewModel {
	constructor(public readonly id: number, public readonly name: string) {}

	static mapCollection(repositories: User.Repository[]) {
		return repositories.map(repository => {
			return new RepositoryViewModel(repository.id, repository.name)
		})
	}
}
