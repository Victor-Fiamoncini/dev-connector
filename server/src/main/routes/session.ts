import { Router } from 'express'

import {
	ExpressAuthenticatedPayloadRouterAdapter,
	ExpressAuthenticationMiddlewareAdapter,
	ExpressBodyRouterAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import {
	EnsureUserAuthenticationControllerFactory,
	RefreshUserAuthenticationControllerFactory,
	TokenAuthenticationMiddlewareFactory,
} from '@main/factories'

import { EnsureUserAuthenticationValidator } from '@utils/implementations/validators'

const sessionRoutes = (router: Router): void => {
	router.post(
		'/sessions',
		ExpressValidatorAdapter.adapt(new EnsureUserAuthenticationValidator()),
		ExpressBodyRouterAdapter.adapt(
			EnsureUserAuthenticationControllerFactory.make()
		)
	)

	router.get(
		'/sessions',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			RefreshUserAuthenticationControllerFactory.make()
		)
	)
}

export default sessionRoutes
