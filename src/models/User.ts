import mongoose from 'mongoose';

interface UserAttrs {
	name: string;
	email: string;
	password:string;
}

export interface UserDoc extends mongoose.Document {
	name: string;
	email: string;
	password:string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc
  generateAuthenticationToken(user: UserDoc): string
}

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique:true
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
				delete ret.password;
			},
		},
	}
);

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs);
};

userSchema.statics.generateAuthenticationToken = function(user: UserDoc){
    // TODO: Implement a JWT generator
    return 'jwt token'
}

export default User;
