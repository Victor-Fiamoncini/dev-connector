export namespace User {
	export type Repository = {
		id: number
		name: string
	}
}

export class User {
	constructor(
		public id: string,
		public name: string,
		public email: string,
		public password: string,
		public avatar: string,
		public created_at: Date,
		public update_at: Date
	) {}
}
