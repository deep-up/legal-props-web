const userController = require("../../controllers/userController.js");
const Role = require("../../models/Role.js");
const User = require("../../models/User.js");
const mongoose = require ("mongoose");

module.exports.UsersResolvers = {
    Query: {
        hello: () => {
            return "Hello world from graphQL"
        },
        async user(_, { input }) {
            console.log(input._id);
            console.log("user request");
            const foundUser = await User.findById(new mongoose.Types.ObjectId(input._id));
            console.log(foundUser);
            if (foundUser) {
                console.log("user found");
                return {
                    success: true,
                    message: "OK",
                    user: foundUser,
                };
            } else {
                return {
                    success: false,
                    message: "nodatafound",
                    user: null,
                };

            }

        },
        async users() {
            const foundUsers = await User.find();
            const filledUsers = foundUsers.map(async (user) => {
                const foundRoles = await Role.find({ _id: { $in: user.roles.map(role => role._id) } });
                console.log("roles");
                console.log(foundRoles);
                user.roles = foundRoles;
                console.log(user.createdAt.toISOString());
                user.createdAtISO = user.createdAt.toISOString();
                user.updatedAtISO = user.updatedAt.toISOString();
                return user;
            })
            return filledUsers;
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            return userController.createUserController(input);
        }
    }

}