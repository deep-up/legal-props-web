import Role from "../../models/Role.js";
import User from "../../models/User.js";

export const UsersResolvers = {
    Query: {
        hello: () => {
            return "Hello world from graphQL"
        },
        async users() {
            const foundUsers = await User.find();
            const filledUsers = foundUsers.map(async (user) =>  {
                const foundRoles = await Role.find({ _id:{$in:user.roles.map(role => role._id)} });
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

            const foundUser = await User.findOne({ email:input.email });
            if(foundUser){
              return {
                success: false,
                message: "user.create.exist",
                _id: null
            }; 
            }

            const newUser = new User({
                name: input.name,
                password: input.password,
                email: input.email
            });
            if (input.roles) {
                const foundRoles = await Role.find({ name:{$in:input.roles.map(role => role.name)} });
                newUser.roles = foundRoles.map(role => role._id);
                console.log(newUser.roles);
            }
            if ((newUser.roles.length===0)) {
                console.log("no roles");
                const role = await Role.findOne({ name: "user" });
                newUser.roles = [role._id];
            }

            const savedUser = await newUser.save();
            return {
                success: true,
                message: "user.create.success",
                _id: savedUser._id
            };
        }
    }

}