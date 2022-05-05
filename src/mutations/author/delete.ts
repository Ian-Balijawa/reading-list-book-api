import Author, { AuthorDoc } from '../../models/Author';
import Book from '../../models/Book';

type Args = {
    authorId: string;
};

const deleteAuthorMutation = async (
  parent: unknown,
  args: Args
): Promise<AuthorDoc | null> => {
  let deletedAuthor = await Author.findByIdAndRemove(args.authorId)

  // also delete asscociated books for this author
  await Book.remove({ author: { id: args.authorId } })

  return deletedAuthor
}

export default deleteAuthorMutation;
