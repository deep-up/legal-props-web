const express = require('express');
const path = require('path');
const cors = require("cors");
const morgan = require("morgan");
const authRouter = require('./routes/auth.routes.js');
const usersRouter = require('./routes/users.routes.js');
const initialSetup = require("./libs/initialSetup.js");

const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(cors());
app.use(morgan("dev"));

/*app.use('/graphql/users', graphqlHTTP.graphqlHTTP({
    schema: UsersSchema,
    graphiql: true
}));
*/

app.use("/graphql", authRouter);
app.use("/graphql", usersRouter);

//if (process.env.ENV === 'production') {
console.log("Starting server in Production Mode");
app.use(express.static(path.join(__dirname, '../webclient/build')));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../webclient/build/index.html'));
});
//}

initialSetup.createRoles();

module.exports = app;

