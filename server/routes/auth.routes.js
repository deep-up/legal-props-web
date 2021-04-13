const express = require ( "express");
const graphqlHTTP =  require ( 'express-graphql');
const authSchema = require ( '../graphql/auth/AuthSchema.js');

const router = express.Router();

router.use("/auth", graphqlHTTP.graphqlHTTP({
    schema: authSchema.AuthSchema,
    graphiql: true
}));

module.exports = router;
