export interface HashGeneratorAdapter {
	adapt(payload: string): Promise<string>
}
