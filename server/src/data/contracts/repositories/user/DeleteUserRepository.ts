export interface DeleteUserRepository {
	deleterUser(user: string): Promise<void>
}
