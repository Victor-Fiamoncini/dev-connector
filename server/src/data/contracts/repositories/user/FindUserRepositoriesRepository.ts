import { User } from '@domain/entities'

export interface FindUserRepositoriesRepository {
	findRepos(username: string): Promise<User.Repository[]>
}
