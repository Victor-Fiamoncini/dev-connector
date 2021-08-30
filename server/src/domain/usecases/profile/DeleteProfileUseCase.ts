export interface DeleteProfileUseCase {
	run(user: string): Promise<void>
}
