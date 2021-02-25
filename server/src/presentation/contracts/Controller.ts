import { HttpResponse, HttpResquest } from '@presentation/contracts'

export interface Controller {
	handle(httpResquest?: HttpResquest): Promise<HttpResponse>
}
