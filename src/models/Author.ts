import mongoose from "mongoose";

interface AuthorAttrs {
    name: string;
    age: number;
}

export interface AuthorDoc extends mongoose.Document{
    name: string,
    age:number,
}

interface AuthorModel extends mongoose.Model<AuthorDoc> {
    build(attrs: AuthorAttrs): AuthorDoc;
}

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    age: {
        type: Number,
        min:0,
        required:true,
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});


const Author = mongoose.model<AuthorDoc, AuthorModel>('Author', authorSchema);

authorSchema.statics.build = (attrs:AuthorAttrs) => {
    return new Author(attrs)
};

export default Author;