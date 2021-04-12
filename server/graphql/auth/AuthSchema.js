import { makeExecutableSchema } from "graphql-tools";
import { AuthResolvers } from "./AuthResolvers.js";
import gql from 'graphql-tag';

const typeDefs = gql`
    type Query{
        hello:String!
    }
    type Mutation{
        auth(input:AuthInput):Response!
    }
    type Response {
        success: Boolean!
        message:String!
        token: String
        _id:ID
    }

    input AuthInput{
        email:String!
        password:String!
    }
    
`;

export const AuthSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: AuthResolvers
});