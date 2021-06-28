import {
	ExpressAuthenticatedPayloadRouterAdapter,
	ExpressAuthenticationMiddlewareAdapter,
	ExpressParamRouterAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import {
	CreatePostControllerFactory,
	FetchPostControllerFactory,
	FetchPostsControllerFactory,
	TokenValidateAuthenticationMiddlewareFactory,
} from '@main/factories'
import { CreatePostValidator } from '@utils/validators'
import { Router } from 'express'

const postRoutes = (router: Router): void => {
	router.post(
		'/posts',
		ExpressValidatorAdapter.adapt(new CreatePostValidator()),
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenValidateAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			CreatePostControllerFactory.make()
		)
	)

	router.get(
		'/posts',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenValidateAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			FetchPostsControllerFactory.make()
		)
	)

	router.get(
		'/posts/:id',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenValidateAuthenticationMiddlewareFactory.make()
		),
		ExpressParamRouterAdapter.adapt(FetchPostControllerFactory.make())
	)
}

export default postRoutes
