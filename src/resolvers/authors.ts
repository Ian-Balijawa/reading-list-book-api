import Author, { AuthorDoc } from "../models/Author";
import { BookDoc } from "../models/Book";


const authorsResolvers = async (): Promise<AuthorDoc[]> => {
  const authors = await Author.find({})

  return authors
}
export default authorsResolvers;
