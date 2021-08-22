import { Router } from 'express'

import {
	ExpressAuthenticatedPayloadRouterAdapter,
	ExpressAuthenticationMiddlewareAdapter,
	ExpressParamRouterAdapter,
	ExpressRouterAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import {
	CreateOrUpdateProfileControllerFactory,
	FetchProfileControllerFactory,
	FetchProfilesControllerFactory,
	TokenAuthenticationMiddlewareFactory,
} from '@main/factories'

import { CreateOrUpdateProfileValidator } from '@utils/implementations/validators'

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

	router.get(
		'/profiles',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressRouterAdapter.adapt(FetchProfilesControllerFactory.make())
	)

	router.get(
		'/profiles/:id',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressParamRouterAdapter.adapt(FetchProfileControllerFactory.make())
	)
}

export default profileRoutes
