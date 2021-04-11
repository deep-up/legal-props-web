import UserModel from "../models/User.js";

export const UsersResolvers = {
    Query: {
        hello: () => {
            return "Hello world from graphQL"
        },
        async users() {
            return await UserModel.find();
        }
    },
    Mutation: {
        async auth(_, { input }) {
            console.log({ userauth: input.username });
            return await UserModel.findOne({ username: input.username, password: input.password }, "username", function (err, usr) {
                if (err){
                    console.log({ userauth: "failed", err });
                    return {
                        success: false,
                        message: "login.auth.fail",
                        token: err.message
                    };
                }
            }).then((usr) => {
                if (usr) {
                    console.log({ userauth: "success", username:usr.username });
                    return {
                        success: true,
                        message: "login.auth.success"
                    }
                }
                else{
                    console.log({ userauth: "fail", username:input.username });
                    return {
                        success: false,
                        message: "login.auth.fail",
                    }
                }
            });

        },
        async createUser(_, { input }) {
            const newUser = new UserModel(input);
            await newUser.save();
            return {
                success: true,
                message: "user.create.success",
            };
        }
    }

}