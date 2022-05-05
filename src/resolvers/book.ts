import Book, { BookDoc } from "../models/Book";

type Args = {
    id:string
};

const bookResolver = async (parent: unknown, args: Args):Promise<BookDoc> => {
    const book = await Book.findById(args.id).populate('Author');
    return book;
};

export default bookResolver;