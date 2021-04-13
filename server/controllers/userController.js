const User = require("../models/User.js");
const Role = require("../models/Role.js");


module.exports.createUserController = async function (input) {

    const foundUser = await User.findOne({ email: input.email });
    if (foundUser) {
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
        const foundRoles = await Role.find({ name: { $in: input.roles.map(role => role.name) } });
        newUser.roles = foundRoles.map(role => role._id);
        console.log(newUser.roles);
    }
    if ((newUser.roles.length === 0)) {
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

