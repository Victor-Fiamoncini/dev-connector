import { User } from '@domain/entities'

export interface FetchUserRepositoriesUseCase {
	fetchRepos(username: string): Promise<User.Repository[]>
}
