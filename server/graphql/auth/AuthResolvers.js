const jwt =require( "jsonwebtoken");
const User =require( "../../models/User.js");




module.exports.AuthResolvers = {
    Query: {
        hello: () => {
            return "Hello world from graphQL"
        },
    },
    Mutation: {
        async auth(_, { input }) {
            console.log({ userauth: input.email });
            return await User.findOne({ email: input.email, password: input.password }, "_id email", function (err, usr) {
                if (err) {
                    console.log({ userauth: "failed", err });
                    return {
                        success: false,
                        message: "login.auth.fail",
                        token: err.message
                    };
                }
            }).then((usr) => {
                if (usr) {
                    console.log({ userauth: "success", email: usr.email });
                    // Create a token
                    const token = jwt.sign({ id: usr._id }, process.env.API_KEY, {
                        expiresIn: '4h'
                    });
                    return {
                        success: true,
                        message: "login.auth.success",
                        _id: usr._id,
                        token
                    }
                }
                else {
                    console.log({ userauth: "fail", email: input.email });
                    return {
                        success: false,
                        message: "login.auth.fail",
                        _id: null
                    }
                }
            });

        },
    }

}