import { gql } from "apollo-server";

const typeDefs = gql`
    type User {
        name:String!,
        email:String!
    }

    type Book{
        name:String!,
        genre:String!,
        author:Author!
    }

    type Author {
        name:String!,
        age: Number!,
        id:String!
    }

    input UserInput {
        email:String,
    }

    input BookInput{
        id:String!
    }
    input AuthorInput {
        id:String!
    }

    type Query {
        users:[User]
        books: [Book],
        authors:[Author],
        user(input:UserInput): User,
        book(input:BookInput):Book,
        author(input:AuthorInput):Author,
    }
`;

export default typeDefs;