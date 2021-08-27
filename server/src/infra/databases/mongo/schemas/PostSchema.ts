import { Document, Model, model, Schema } from 'mongoose'

import { PostDataModel } from '@data/data-models'

type PostDocument = Document & PostDataModel.Props

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

export const PostMongoDataSource: Model<PostDocument> = model(
	'Post',
	PostSchema
)
