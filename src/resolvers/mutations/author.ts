import Author, { AuthorDoc } from '../../models/Author'
import Book from '../../models/Book'

type Args = {
  name: string
  age: number
}

const addAuthorMutation = async (
  parent: unknown,
  args: Args
): Promise<AuthorDoc> => {
  //let newAuthor = Author.build({ name: args.name, age: args.age })
  let newAuthor = new Author({ name: args.name, age: args.age })

  newAuthor = await newAuthor.save()
  return newAuthor
}

const deleteAuthorMutation = async (
  parent: unknown,
  args: { authorId: string }
): Promise<AuthorDoc | null> => {
  let deletedAuthor = await Author.findByIdAndRemove(args.authorId)

  // also delete asscociated books for this author
  await Book.remove({ author: { id: args.authorId } })

  return deletedAuthor
}

export { deleteAuthorMutation, addAuthorMutation }
