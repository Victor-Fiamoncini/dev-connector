import { User } from '@domain/entities'

export interface RefreshUserAuthenticationUseCase {
	refreshAuthentication(id: string): Promise<User>
}
