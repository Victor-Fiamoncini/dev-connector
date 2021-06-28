import { User } from '@domain/entities'

export namespace EnsureUserAuthenticationUseCase {
	export type Params = {
		email: string
		password: string
	}
}

export interface EnsureUserAuthenticationUseCase {
	ensureAuthentication(
		data: EnsureUserAuthenticationUseCase.Params
	): Promise<User>
}
