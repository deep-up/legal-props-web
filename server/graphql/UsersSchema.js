import { makeExecutableSchema } from "graphql-tools";
import { UsersResolvers } from "./UsersResolvers.js";
import gql from 'graphql-tag';

const typeDefs = gql`
    type Query{
        hello:String!
        users:[User]
    }
    type Mutation{
        auth(input:UserAuthInput):Response!
        createUser(input:UserAuthInput):Response!
    }
    type Response {
        success: Boolean!
        message:String!
        token: String
    }

    type User{
        _id:ID
        username:String!
        password:String!
    }
    input UserAuthInput{
        username:String!
        password:String!
    }
`;

export const UsersSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: UsersResolvers
});