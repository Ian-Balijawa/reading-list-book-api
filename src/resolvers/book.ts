import Book, { BookDoc } from "../models/Book";

type Args = {
    id:string
};

const bookResolver = async (
  parent: unknown,
  args: Args
): Promise<BookDoc | null> => {
  const book = await Book.findById(args.id).populate({
    path: 'author',
    select: 'name -_id id age'
  })
  
  return book
}

export default bookResolver;