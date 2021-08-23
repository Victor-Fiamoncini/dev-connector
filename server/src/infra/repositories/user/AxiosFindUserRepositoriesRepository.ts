import axios from 'axios'

import { FindUserRepositoriesRepository } from '@data/contracts'

// prettier-ignore
export class AxiosFindUserRepositoriesRepository implements FindUserRepositoriesRepository {
	constructor(
		private readonly githubClientID: string,
		private readonly githubClientSecret: string
	) {}

	async findRepos(username: string) {
		const response = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${this.githubClientID}&client_secret=${this.githubClientSecret}`
		)

		return response.data
	}
}
