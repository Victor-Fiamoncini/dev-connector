import {
	ExpressAttributeRouterAdapter,
	ExpressBodyRouterAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import {
	EnsureUserAuthenticationControllerFactory,
	RefreshUserAuthenticationControllerFactory,
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
		ExpressAttributeRouterAdapter.adapt(
			RefreshUserAuthenticationControllerFactory.make(),
			'userId'
		)
	)
}

export default sessionRoutes
