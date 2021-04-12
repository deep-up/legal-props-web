import { makeExecutableSchema } from "graphql-tools";
import { UsersResolvers } from "./UsersResolvers.js";
import gql from 'graphql-tag';

const typeDefs = gql`
    type Query{
        hello:String!
        users:[User]
    }
    type Mutation{
        createUser(input:UserInput):Response!
    }
    type Response {
        success: Boolean!
        message:String!
        token: String
        _id:ID
    }

    type User{
        _id:ID
        email:String!
        password:String!
        name:String,
        roles:[Role],
        createdAt:String
        updatedAt:String
        createdAtISO:String
        updatedAtISO:String
    }
    type Role{
        _id:ID
        name: String!
    }
    input UserInput{
        email:String!
        password:String!
        name: String
        roles:[RoleInput]
    }
    input RoleInput{
        name: String!
    }
    
`;

export const UsersSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: UsersResolvers
});