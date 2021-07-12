export interface DeleteProfileRepository {
	deleteProfile(user: string): Promise<void>
}
