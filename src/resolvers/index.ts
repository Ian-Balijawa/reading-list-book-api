import authorResolver from "./author";
import authorsResolvers from "./authors";
import bookResolver from "./book";
import booksResolver from "./books";
import userResolver from "./user";
import usersResolvers from "./users";
import addAuthorMutation from "../mutations/author/add";
import deleteAuthorMutation from "../mutations/author/delete";
import addBookMutation from "../mutations/book/add";
import deleteBookMutation from "../mutations/book/delete";
import addUserMutation from "../mutations/user/add";
import deleteUserMutation from "../mutations/user/delete";

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


export default resolvers;
