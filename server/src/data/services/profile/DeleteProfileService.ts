import { DeleteProfileRepository, DeleteUserRepository } from '@data/contracts'

import { DeleteProfileUseCase } from '@domain/usecases'

export class DeleteProfileService implements DeleteProfileUseCase {
	constructor(
		private readonly deleteProfileRepository: DeleteProfileRepository,
		private readonly deleteUserRepository: DeleteUserRepository
	) {}

	async run(user: string) {
		await Promise.all([
			this.deleteProfileRepository.execute(user),
			this.deleteUserRepository.deleterUser(user),
		])
	}
}
