import Author, { AuthorDoc } from "../models/Author";
import { BookDoc } from "../models/Book";


const authorsResolvers = async (): Promise<
	(AuthorDoc & {
		_id: any;
	})[]
> => {
	const authors = await Author.find({});

	return authors;
};
export default authorsResolvers;
