import { Request, Response } from 'express'

import { Controller } from '@presentation/contracts'

export class ExpressRouterAdapter {
	static adapt(controller: Controller) {
		return async (_: Request, res: Response): Promise<Response> => {
			const httpResponse = await controller.handle()

			return res.status(httpResponse.statusCode).json(httpResponse.data)
		}
	}
}
