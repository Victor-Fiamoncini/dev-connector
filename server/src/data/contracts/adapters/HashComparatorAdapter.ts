export interface HashComparatorAdapter {
	adapt(payload: string, hashedPayload: string): Promise<boolean>
}
