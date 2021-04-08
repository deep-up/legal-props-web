import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema.js';
const app = express();

const PORT = process.env.PORT || 5000;


app.use('/graphql', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,  Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
app.use('/graphql', graphqlHTTP.graphqlHTTP({
    schema,
    graphiql: true
}));

const server = app.listen(PORT, () => {
    console.log(`******************************************`);
    console.log(`Legalprops Server V1.0 by Deep-up`);
    console.log(`Express listen at http://localhost:${PORT}`);
    console.log(`******************************************`);
});


/*var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
 
const POSTS = [
    { author: "John Doe", body: "Hello world" },
    { author: "Jane Doe", body: "Hi, planet!" },
  ];

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  type Post {
    id: ID
    author: String
    body: String
  }
`);

//const schema = buildASTSchema(gql`

//`);
 
// The root provides a resolver function for each API endpoint
const mapPost = (post, id) => post && ({ id, ...post });

const root = {
  posts: () => POSTS.map(mapPost),
  post: ({ id }) => mapPost(POSTS[id], id),
};
 
var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);

*/




/*
const ENV = process.env.NODE_ENV;

const SECRET = process.env.SECRET || "deepUp";

app.get('/', (req, res) => {
    res.json({
        text: 'api works'
    });
});

app.post('/api/login', (req, res) => {
    const user = { id: 3 };
    const token = jwt.sign({ user }, 'deepupsecretkey');
    res.json({
        token
    });
});

app.get('/api/protected', ensureToken, (req, res) => {
    jwt.verify(req.token, 'deepupsecretkey', (err, data) => {
        if (err) {
            res.sendStatus(403);
        }else{
            res.json({
                text: 'protected',
                data
            });
                }
    });
});


app.listen(PORT, () => {
    console.log("server listening on port " + PORT);
});

function ensureToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}
*/