import { Router } from "express";
import graphqlHTTP from 'express-graphql';
import {AuthSchema} from '../graphql/auth/AuthSchema.js';

const router = Router();

router.use("/auth", graphqlHTTP.graphqlHTTP({
    schema: AuthSchema,
    graphiql: true
}));

export default router;
