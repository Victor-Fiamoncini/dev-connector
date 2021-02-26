import { ExpressBodyRouterAdapter } from '@main/adapters'
import { CreateUserControllerFactory } from '@main/factories'
import { Router } from 'express'

const userRoutes = (router: Router): void => {
	router.post(
		'/users',
		ExpressBodyRouterAdapter.handleBodyRoute(CreateUserControllerFactory.make())
	)
}

export default userRoutes
