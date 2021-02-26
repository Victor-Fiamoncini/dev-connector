import { CreateUserControllerFactory } from '@main/factories'
import { Router } from 'express'

const userRoutes = (router: Router): void => {
	router.post('/users', async (req, res) => {
		const { name, email, password } = req.body

		const createUserController = CreateUserControllerFactory.make()

		const httpResponse = await createUserController.handle({
			body: {
				name,
				email,
				password,
			},
		})

		return res.json(httpResponse.statusCode).json(httpResponse.data)
	})
}

export default userRoutes
