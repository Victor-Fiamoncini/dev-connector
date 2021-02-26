export interface HashGenerator {
	generateHash(payload: string): Promise<string>
}
