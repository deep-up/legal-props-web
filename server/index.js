import express from 'express';
import graphqlHTTP from 'express-graphql';
import dotenv from 'dotenv';
import cors from "cors";
import {UsersSchema} from './graphql/UsersSchema.js';
import {connect} from "./database.js";
import log from 'console-log-timestamp';
dotenv.config();
const app = express();
app.use(cors());
connect();
log('America/Bogota');

// since logger only returns a UTC version of date, I'm defining my own date format - using an internal module from console-stamp

const PORT = process.env.PORT || 5000;

app.use('/graphql/users', graphqlHTTP.graphqlHTTP({
    schema: UsersSchema,
    graphiql: true
}));

const server = app.listen(PORT, () => {
    console.log(`******************************************`);
    console.log(`Legalprops Server V1.0 by Deep-up`);
    console.log(`Server started in ${process.env.NODE_ENV} mode`);
    
    if (process.env.NODE_ENV === "production"){
        console.log(`to configure the url in production mode`);
    }else{
        console.log(`listen at http://localhost:${PORT}`);
    }
    console.log(`******************************************`);
});





