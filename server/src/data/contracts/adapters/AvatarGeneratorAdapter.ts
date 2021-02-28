export interface AvatarGeneratorAdapter {
	generateAvatar(payload: string): Promise<string>
}
