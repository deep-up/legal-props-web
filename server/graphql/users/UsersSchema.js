const graphqlTools = require ("graphql-tools");
const usersResolvers  = require ( "./UsersResolvers.js");
const gql  = require ( 'graphql-tag');

const typeDefs = gql`
    type Query{
        hello:String!
        users:[User]
        user(input:UserQueryInput):User
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
    input UserQueryInput{
        _id:ID
    }
    input RoleInput{
        name: String!
    }
    
`;

module.exports.UsersSchema = graphqlTools.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: usersResolvers.UsersResolvers
});