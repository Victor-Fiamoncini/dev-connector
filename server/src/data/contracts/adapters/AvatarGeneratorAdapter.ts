export interface AvatarGeneratorAdapter {
	adapt(payload: string): Promise<string>
}
