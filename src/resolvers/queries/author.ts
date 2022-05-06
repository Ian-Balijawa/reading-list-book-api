import Author, { AuthorDoc } from '../../models/Author'
import { BookDoc } from '../../models/Book'

const authorsResolvers = async (): Promise<AuthorDoc[] | []> => {
  const authors = await Author.find({})

  return authors
}

type Args = {
  id: string
}

const authorResolver = async (
  parent: unknown,
  args: Args
): Promise<AuthorDoc | null> => {
  const author = await Author.findById(args.id)
  return author
}

export { authorResolver, authorsResolvers }
