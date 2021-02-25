export type HttpResponse<T = unknown> = {
	statusCode: number
	data: T
}
