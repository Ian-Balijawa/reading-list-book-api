import { AuthorDoc } from '../models/Author';
import Book, { BookDoc } from './../models/Book';

type Args = {
	name: string;
	genre: string;
	author: AuthorDoc;
};

const booksResolver = async (
	_parent: unknown,
	_args: Args
): Promise<Omit<BookDoc & { _id: any }, never>[]> => {
	const books = await Book.find({}).populate('Author');

	return books;
};

export default booksResolver;