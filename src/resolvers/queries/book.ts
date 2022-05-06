import { AuthorDoc } from '../../models/Author'
import Book, { BookDoc } from './../../models/Book'

const bookResolver = async (
  parent: unknown,
  args: { id: string }
): Promise<BookDoc | null> => {
  const book = await Book.findById(args.id).populate({
    path: 'author',
    select: 'name -_id id age'
  })

  return book
}

type Args = {
  name: string
  genre: string
  author: AuthorDoc
}

const booksResolver = async (
  _parent: unknown,
  _args: Args
): Promise<BookDoc[]> => {
  const books = await Book.find({}).populate({
    path: 'author',
    select: 'name -_id age'
  })

  return books
}

export { booksResolver, bookResolver }
