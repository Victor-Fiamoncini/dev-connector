import { Router } from 'express'

import {
	ExpressBodyRouterAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import { CreateUserControllerFactory } from '@main/factories'

import { CreateUserValidator } from '@utils/implementations'

const userRoutes = (router: Router): void => {
	router.post(
		'/users',
		ExpressValidatorAdapter.adapt(new CreateUserValidator()),
		ExpressBodyRouterAdapter.adapt(CreateUserControllerFactory.make())
	)
}

export default userRoutes
