import { UserModel } from '@data/models'
import { Document, Model, model, Schema } from 'mongoose'

type MongoooseUserModel = UserModel & Document

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
		collection: 'users',
	}
)

export const UserMongoDataSource: Model<MongoooseUserModel> = model(
	'User',
	UserSchema
)
