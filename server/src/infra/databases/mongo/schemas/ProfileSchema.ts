import { Document, Model, model, Schema } from 'mongoose'

import { ProfileDataModel } from '@data/data-models'

interface MongoooseProfileModel extends Document, ProfileDataModel.Props {
	id: ProfileDataModel.Props['id']
	createdAt: Date
	updatedAt: Date
}

const ProfileSchema = new Schema(
	{
		company: {
			type: String,
		},
		website: {
			type: String,
		},
		location: {
			type: String,
		},
		status: {
			type: String,
			required: true,
		},
		skills: {
			type: [String],
			required: true,
		},
		bio: {
			type: String,
		},
		githubusername: {
			type: String,
		},
		experience: [
			{
				title: {
					type: String,
					required: true,
				},
				company: {
					type: String,
					required: true,
				},
				location: {
					type: String,
				},
				from: {
					type: Date,
					required: true,
				},
				to: {
					type: Date,
				},
				current: {
					type: Boolean,
					default: false,
				},
				description: {
					type: String,
				},
			},
		],
		education: [
			{
				school: {
					type: String,
					required: true,
				},
				degree: {
					type: String,
					required: true,
				},
				fieldofstudy: {
					type: String,
				},
				from: {
					type: Date,
					required: true,
				},
				to: {
					type: Date,
				},
				current: {
					type: Boolean,
					default: false,
				},
				description: {
					type: String,
				},
			},
		],
		social: {
			youtube: {
				type: String,
			},
			instagram: {
				type: String,
			},
			linkedin: {
				type: String,
			},
			facebook: {
				type: String,
			},
			twitter: {
				type: String,
			},
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
		collection: 'profiles',
	}
)

export const ProfileMongoDataSource: Model<MongoooseProfileModel> = model(
	'Profile',
	ProfileSchema
)
