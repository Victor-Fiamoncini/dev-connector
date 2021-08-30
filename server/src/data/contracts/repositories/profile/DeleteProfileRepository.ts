export interface DeleteProfileRepository {
	execute(user: string): Promise<void>
}
