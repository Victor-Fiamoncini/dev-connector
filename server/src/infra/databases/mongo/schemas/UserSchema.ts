import { Document, Model, model, Schema } from 'mongoose'

import { UserDataModel } from '@data/data-models'

interface MongoooseUserModel extends Document, UserDataModel.Props {
	id: UserDataModel.Props['id']
	createdAt: Date
	updatedAt: Date
}

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
