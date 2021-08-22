export interface DeleteProfileUseCase {
	deleteProfile(user: string): Promise<void>
}
