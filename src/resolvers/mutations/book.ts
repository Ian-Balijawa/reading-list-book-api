import Author from '../../models/Author'
import Book, { BookDoc } from '../../models/Book'

type Args = {
  name: string
  genre: string
  authorId: string
}

const addBookMutation = async (
  parent: unknown,
  args: Args
): Promise<BookDoc | null> => {
  let author = await Author.findById(args.authorId)

  if (!author) {
    console.error('Invalid authorId! Please supply a correct author id')

    return null
  }

  // let book = Book.build({
  //   name: args.name,
  //   genre: args.genre,
  //   author
  // })
  let book = new Book({
    name: args.name,
    genre: args.genre,
    author
  })

  book = await book.save()

  return book
}

const deleteBookMutation = async (
  parent: unknown,
  args: { id: string }
): Promise<BookDoc | null> => {
  let deletedBook = await Book.findByIdAndRemove(args.id)

  return deletedBook
}

export { deleteBookMutation, addBookMutation }
