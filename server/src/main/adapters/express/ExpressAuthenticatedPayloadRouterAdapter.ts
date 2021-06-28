import { Controller } from '@presentation/contracts'
import { Request, Response } from 'express'

export class ExpressAuthenticatedPayloadRouterAdapter {
	static adapt(controller: Controller) {
		return async (req: Request, res: Response): Promise<Response> => {
			const httpResponse = await controller.handle({
				body: {
					...req.body,
					user: req.authPayload,
				},
			})

			return res.status(httpResponse.statusCode).json(httpResponse.data)
		}
	}
}