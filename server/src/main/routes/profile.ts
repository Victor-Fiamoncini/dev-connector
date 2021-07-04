import {
	ExpressAuthenticatedPayloadRouterAdapter,
	ExpressAuthenticationMiddlewareAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import {
	CreateOrUpdateProfileControllerFactory,
	TokenAuthenticationMiddlewareFactory,
} from '@main/factories'
import { CreateOrUpdateProfileValidator } from '@utils/implementations/validators'
import { Router } from 'express'

const profileRoutes = (router: Router): void => {
	router.post(
		'/profiles',
		ExpressValidatorAdapter.adapt(new CreateOrUpdateProfileValidator()),
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			CreateOrUpdateProfileControllerFactory.make()
		)
	)
}

export default profileRoutes
