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
	DeleteProfileControllerFactory,
	FetchProfilesControllerFactory,
	FetchUserProfileControllerFactory,
	TokenAuthenticationMiddlewareFactory,
	CreateExperienceControllerFactory,
	DeleteExperienceControllerFactory,
} from '@main/factories'

import {
	CreateExperienceValidator,
	CreateOrUpdateProfileValidator,
} from '@utils/implementations/validators'

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

	router.delete(
		'/profiles',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			DeleteProfileControllerFactory.make()
		)
	)

	router.get(
		'/profiles/user/me',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			FetchUserProfileControllerFactory.make()
		)
	)

	router.post(
		'/profiles/experience',
		ExpressValidatorAdapter.adapt(new CreateExperienceValidator()),
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			CreateExperienceControllerFactory.make()
		)
	)

	router.delete(
		'/profiles/experience/:id',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			DeleteExperienceControllerFactory.make()
		)
	)
}

export default profileRoutes
