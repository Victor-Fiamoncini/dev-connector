export interface HashGeneratorAdapter {
	generateHash(payload: string): Promise<string>
}
