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
	TokenAuthenticationMiddlewareFactory,
} from '@main/factories'
import { CreatePostValidator } from '@utils/implementations/validators'
import { Router } from 'express'

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
		ExpressAuthenticatedPayloadRouterAdapter.adapt(
			FetchPostsControllerFactory.make()
		)
	)

	router.get(
		'/posts/:id',
		ExpressAuthenticationMiddlewareAdapter.adapt(
			TokenAuthenticationMiddlewareFactory.make()
		),
		ExpressParamRouterAdapter.adapt(FetchPostControllerFactory.make())
	)

	// router.delete(
	// 	'/posts/:id',
	// 	ExpressAuthenticationMiddlewareAdapter.adapt(
	// 		TokenAuthenticationMiddlewareFactory.make()
	// 	),
	// 	ExpressParamRouterAdapter.adapt(FetchPostControllerFactory.make())
	// )
}

export default postRoutes
