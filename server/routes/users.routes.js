const express = require("express");
const graphqlHTTP = require('express-graphql');
const usersSchema = require('../graphql/users/UsersSchema.js');

const router = express.Router();

router.use("/users", graphqlHTTP.graphqlHTTP({
    schema: usersSchema.UsersSchema,
    graphiql: true
}));

module.exports = router;
