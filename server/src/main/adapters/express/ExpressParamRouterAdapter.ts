import { Request, Response } from 'express'

import { Controller } from '@presentation/contracts'

export class ExpressParamRouterAdapter {
	static adapt(controller: Controller) {
		return async (req: Request, res: Response): Promise<Response> => {
			const httpResponse = await controller.handle({
				body: {},
				params: { ...req.params },
			})

			return res.status(httpResponse.statusCode).json(httpResponse.data)
		}
	}
}
