import { Router } from 'express'

import {
	ExpressAuthenticatedPayloadRouterAdapter,
	ExpressAuthenticationMiddlewareAdapter,
	ExpressParamRouterAdapter,
	ExpressRouterAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import {
	CreatePostControllerFactory,
	DeletePostControllerFactory,
	FetchPostControllerFactory,
	FetchPostsControllerFactory,
	TokenAuthenticationMiddlewareFactory,
} from '@main/factories'

import { CreatePostValidator } from '@utils/implementations/validators'

const postRoutes = (router: Router): void => {
	router.post(
		'/posts',
		ExpressValidatorAdapter.adapt(new CreatePostValidator()),
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			CreatePostControllerFactory.make()
		)
	)

	router.get(
		'/posts',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressRouterAdapter.adapt(FetchPostsControllerFactory.make())
	)

	router.get(
		'/posts/:id',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressParamRouterAdapter.adapt(FetchPostControllerFactory.make())
	)

	router.delete(
		'/posts/:id',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			DeletePostControllerFactory.make()
		)
	)
}

export default postRoutes
