import {
	ExpressAuthenticationPayloadRouterAdapter,
	ExpressAuthenticationMiddlewareAdapter,
	ExpressBodyRouterAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import {
	EnsureUserAuthenticationControllerFactory,
	RefreshUserAuthenticationControllerFactory,
	TokenValidateAuthenticationMiddlewareFactory,
} from '@main/factories'
import { EnsureUserAuthenticationValidator } from '@utils/validators'
import { Router } from 'express'

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
			TokenValidateAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticationPayloadRouterAdapter.adapt(
			RefreshUserAuthenticationControllerFactory.make()
		)
	)
}

export default sessionRoutes
