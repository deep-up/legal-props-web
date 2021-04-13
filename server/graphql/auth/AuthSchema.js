const graphqlTools = require( "graphql-tools");
const authResolvers = require( "./AuthResolvers.js");
const gql = require( 'graphql-tag');

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

module.exports.AuthSchema = graphqlTools.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: authResolvers.AuthResolvers
});