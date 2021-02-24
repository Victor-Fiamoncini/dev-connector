import { model, Schema } from 'mongoose'
import { compare, genSalt, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'

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
			required: true,
		},
	},
	{
		timestamps: true,
		collection: 'users',
	}
)

UserSchema.methods.getSignedJwtToken = function () {
	const { JWT_AUTH_SECRET, JWT_EXPIRES } = process.env

	return sign({ id: this._id }, JWT_AUTH_SECRET, {
		expiresIn: Number(JWT_EXPIRES),
	})
}

UserSchema.methods.matchPassword = async function (password) {
	return await compare(password, this.password)
}

UserSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		this.password = await hash(this.password, await genSalt(10))
	}

	return next()
})

export default model('User', UserSchema)
