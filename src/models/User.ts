import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

interface UserAttrs {
  name: string;
  email: string;
  password: string;
}

export interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
  generateAuthenticationToken(user: UserDoc): string;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      }
    }
  }
);

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

userSchema.methods.build = (attrs: UserAttrs): UserDoc => {
  return new User(attrs);
};

interface UserPayload {
  id: string;
  email: string;
  name: string;
}

userSchema.statics.generateAuthenticationToken = (user:UserDoc):string=>{
  const authToken = jwt.sign(
    {
      id:user.id,
      email: user.email,
      name: user.name
    },
    process.env.JWT_KEY || 'asdfasdfas'
  ) as string;

  return authToken;
};

export default User;
