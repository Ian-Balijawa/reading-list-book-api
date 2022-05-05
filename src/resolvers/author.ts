import Author, {AuthorDoc } from "../models/Author";

type Args = {
    id: string;
};


const authorResolver = async (
  parent: unknown,
  args: Args
): Promise<AuthorDoc | null> => {
  const author = await Author.findById(args.id)
  return author
}


export default authorResolver;