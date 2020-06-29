import { model, Schema } from 'mongoose'

const PostSchema = new Schema(
	{
		text: {
			type: String,
			required: true,
		},
		name: {
			type: String,
		},
		avatar: {
			type: String,
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

export default model('Post', PostSchema)
