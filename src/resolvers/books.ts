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
): Promise<BookDoc[]> => {
  const books = await Book.find({}).populate({
    path: 'author',
    select: 'name -_id age'
  })
  // const books = await Book.find({})

  return books
}

export default booksResolver;