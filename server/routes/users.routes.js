import { Router } from "express";
import graphqlHTTP from 'express-graphql';
import {UsersSchema} from '../graphql/users/UsersSchema.js';

const router = Router();

router.use("/users", graphqlHTTP.graphqlHTTP({
    schema: UsersSchema,
    graphiql: true
}));

export default router;
