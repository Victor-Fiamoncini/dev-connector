import { Router } from 'express'

import {
	ExpressAuthenticationMiddlewareAdapter,
	ExpressBodyRouterAdapter,
	ExpressParamRouterAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import {
	CreateUserControllerFactory,
	FetchUserRepositoriesControllerFactory,
	TokenAuthenticationMiddlewareFactory,
} from '@main/factories'

import { CreateUserValidator } from '@utils/implementations'

const userRoutes = (router: Router): void => {
	router.post(
		'/users',
		ExpressValidatorAdapter.adapt(new CreateUserValidator()),
		ExpressBodyRouterAdapter.adapt(CreateUserControllerFactory.make())
	)

	router.get(
		'/github/:username',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressParamRouterAdapter.adapt(
			FetchUserRepositoriesControllerFactory.make()
		)
	)
}

export default userRoutes
