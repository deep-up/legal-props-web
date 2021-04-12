import express from 'express';
import cors from "cors";
import morgan from "morgan";
import authRouter from './routes/auth.routes.js';
import usersRouter from './routes/users.routes.js';
import {createRoles} from "./libs/initialSetup.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
/*app.use('/graphql/users', graphqlHTTP.graphqlHTTP({
    schema: UsersSchema,
    graphiql: true
}));
*/

app.use("/graphql",authRouter);
app.use("/graphql",usersRouter);
createRoles();

export default app;

