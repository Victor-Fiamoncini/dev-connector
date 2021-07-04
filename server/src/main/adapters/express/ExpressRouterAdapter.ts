import { Controller } from '@presentation/contracts'
import { Request, Response } from 'express'

export class ExpressRouterAdapter {
	static adapt(controller: Controller) {
		return async (_: Request, res: Response): Promise<Response> => {
			const httpResponse = await controller.handle()

			return res.status(httpResponse.statusCode).json(httpResponse.data)
		}
	}
}
