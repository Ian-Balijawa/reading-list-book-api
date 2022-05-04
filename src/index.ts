import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './schema/schema';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})