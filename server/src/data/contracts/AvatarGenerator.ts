export interface AvatarGenerator {
	generateAvatar(payload: string): Promise<string>
}
