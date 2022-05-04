import Author from "../../models/Author";
import Book, { BookDoc } from "../../models/Book";

type Args = {
    name: string;
    genre: string;
    authorId: string;
};

const addBookMutation = async (parent: unknown, args: Args):Promise<BookDoc> => {
    
    let author = await Author.findById(args.authorId);

    if (!author) {
        console.error('Invalid authorId! Please supply a correct author id');

        return;
    }

    let book = Book.build({
        name: args.name, genre: args.genre,
        author,
    })

    book = await book.save();

    return book;

};

export default addBookMutation;