import Author, { AuthorDoc } from "../../models/Author";

type Args = {
    name: string;
    age: number;
};

const addAuthorMutation = async (parent: unknown, args: Args): Promise<AuthorDoc> => {
  //let newAuthor = Author.build({ name: args.name, age: args.age })
  let newAuthor = new Author({ name: args.name, age: args.age })

  newAuthor = await newAuthor.save()
  return newAuthor
};

export default addAuthorMutation;