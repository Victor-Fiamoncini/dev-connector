import {
	ExpressBodyRouterAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import { EnsureUserAuthenticationControllerFactory } from '@main/factories'
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
}

export default sessionRoutes
