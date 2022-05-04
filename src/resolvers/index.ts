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
        book:bookResolver,
        user:userResolver,
        author:authorResolver,
        books:booksResolver,
        users:usersResolvers,
        authors: authorsResolvers,
        
        // ADD: => MUTATION RESOLVERS  <--> MORE LIKE POST REQUESTS
        addUser:addUserMutation,
        addBook:addBookMutation,
        addAuthor: addAuthorMutation,
        
        // REMOVE: => MUTATION RESOLVERS <--> MORE LIKE DELETE REQUESTS 
        removeUser:deleteUserMutation,
        removeBook:deleteBookMutation,
        removeAuthor:deleteAuthorMutation,
    }
};


export default resolvers;
