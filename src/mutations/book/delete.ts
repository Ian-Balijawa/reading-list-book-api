import Author from '../../models/Author';
import Book, { BookDoc } from '../../models/Book';

type Args = {
    bookId: string;
};

const deleteBookMutation = async (
	parent: unknown,
	args: Args
): Promise<BookDoc> => {
    let deletedBook = await Book.findByIdAndRemove(args.bookId)
	
    return deletedBook;
};

export default deleteBookMutation;
