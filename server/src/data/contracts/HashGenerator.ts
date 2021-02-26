export interface HashGenerator {
	hash(payload: string): Promise<string>
}
