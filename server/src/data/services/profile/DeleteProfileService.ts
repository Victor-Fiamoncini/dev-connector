import { DeleteProfileRepository, DeleteUserRepository } from '@data/contracts'
import { DeleteProfileUseCase } from '@domain/usecases'

export class DeleteProfileService implements DeleteProfileUseCase {
	constructor(
		private readonly deleteProfileRepository: DeleteProfileRepository,
		private readonly deleteUserRepository: DeleteUserRepository
	) {}

	async deleteProfile(user: string): Promise<void> {
		await this.deleteProfileRepository.deleteProfile(user)
		await this.deleteUserRepository.deleterUser(user)
	}
}
