import { CreateUserUseCaseDTO } from '@domain/dtos'
import { User } from '@domain/entities'

interface CreateUserUseCase {
	store({ name, email, password }: CreateUserUseCaseDTO): Promise<User>
}

export default CreateUserUseCase
