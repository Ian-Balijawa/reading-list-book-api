import { authorResolver, authorsResolvers } from './queries/author'
import { bookResolver, booksResolver } from './queries/book'
import { userResolver, usersResolvers } from './queries/user'
import { addAuthorMutation, deleteAuthorMutation } from './mutations/author'
import { addBookMutation, deleteBookMutation } from './mutations/book'
import { addUserMutation, deleteUserMutation } from './mutations/user'

const resolvers = {
  Query: {
    // GET: => RESOLVERS   <--> MORE LIKE GET REQUESTS
    book: bookResolver,
    user: userResolver,
    author: authorResolver,
    books: booksResolver,
    users: usersResolvers,
    authors: authorsResolvers
  },
  Mutation: {
    // POST: => MUTATION   <--> MORE LIKE POST REQUESTS
    addAuthor: addAuthorMutation,
    addBook: addBookMutation,
    addUser: addUserMutation,

    // DELETE: => MUTATION   <--> MORE LIKE DELETE REQUESTS
    removeAuthor: deleteAuthorMutation,
    removeBook: deleteBookMutation,
    removeUser: deleteUserMutation
  }
}

export default resolvers
