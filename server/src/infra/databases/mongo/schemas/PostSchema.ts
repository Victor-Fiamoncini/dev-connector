import { Model, model, Schema } from 'mongoose'

const PostSchema = new Schema(
	{
		name: {
			type: String,
			required: false,
		},
		text: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			required: false,
		},
		likes: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'User',
				},
			},
		],
		comments: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'User',
				},
				text: {
					type: String,
					required: true,
				},
				name: {
					type: String,
					required: true,
				},
				avatar: {
					type: String,
					required: false,
				},
				date: {
					type: Date,
					default: Date.now(),
				},
			},
		],
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
		collection: 'posts',
	}
)

export const PostMongoDataSource: Model<any> = model('Post', PostSchema)
