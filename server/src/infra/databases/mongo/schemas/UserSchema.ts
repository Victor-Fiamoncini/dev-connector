import { Document, Model, model, Schema } from 'mongoose'

import { UserDataModel } from '@data/data-models'

type UserDocument = Document & UserDataModel.Props

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

export const UserMongoDataSource: Model<UserDocument> = model(
	'User',
	UserSchema
)
