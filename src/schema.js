import { makeExecutableSchema } from "graphql-tools"
import { resolvers } from "./resolvers"

const typeDefs = `

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Query {
        allUsers: [User]
        userById( _id: ID ): User
    }

    type Mutation {
        createUser( input: UserInput ): User
        deleteUser( _id: ID ): User
        updateUser(_id: ID, input: UserInput): User
    }

    input UserInput {
        firstname: String!
        lastname: String!
        age: Int
    }

`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})