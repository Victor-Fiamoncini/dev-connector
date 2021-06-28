import {
	ExpressAuthenticatedPayloadRouterAdapter,
	ExpressAuthenticationMiddlewareAdapter,
	ExpressValidatorAdapter,
} from '@main/adapters'
import {
	CreatePostControllerFactory,
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
}

export default postRoutes
