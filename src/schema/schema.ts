import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    name: String!
    email: String!
    password: String!
  }

  type Book {
    name: String!
    genre: String!
    author: Author!
  }

  type Author {
    name: String!
    age: Int!
    id: String!
  }

  input UserInput {
    email: String
    name: String
    password: String
  }

  input BookInput {
    id: String!
    name: String
    genre: String
  }

  input AuthorInput {
    id: String!
    name: String
    age: Int
  }

  type Query {
    users: [User]
    books: [Book]
    authors: [Author]
    user(input: UserInput): User
    book(input: BookInput): Book
    author(input: AuthorInput): Author
    addUser(input: UserInput): User
    addBook(input: BookInput): Book
    addAuthor(input: AuthorInput): Author
    removeUser(input: UserInput): User
    removeBook(input: BookInput): Book
    removeAuthor(input: AuthorInput): Author
  }
`

export default typeDefs;