import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    name: String!
    email: String!
    password: String!
  }

  type Book {
    id: String!
    name: String!
    genre: String!
    author: Author!
  }

  type Author {
    id: String!
    name: String!
    age: Int!
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
    user(email: String): User
    book(id: String!): Book
    author(id: String!): Author
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    addBook(name: String!, genre: String!, authorId: String!): Book
    addAuthor(name: String!, age: Int!): Author
    removeUser(email: String!): User
    removeAuthor(id: String!): Author
    removeBook(id: String!): Book
  }
`

export default typeDefs;