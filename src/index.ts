import { ApolloServer } from 'apollo-server'

import resolvers from './resolvers'

import typeDefs from './schema/schema'

import mongoose from 'mongoose'

const mongoURI = 'mongodb://localhost:27017/reading-list'

mongoose.connect(mongoURI)

mongoose.connection.once('open', () => {
  console.log('connected to monogDB at :', mongoURI)
})

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
