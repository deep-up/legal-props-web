const userController = require ( "../controllers/userController.js");
const Role =require ( "../models/Role.js");
const User =require ( "../models/User.js");
module.exports.createRoles =  async () => {

    try {
        //adding default Roles
        const countrole = await Role.estimatedDocumentCount()
        if (!(countrole > 0)) {
            const valuesrole = await Promise.all([
                new Role({ name: "user" }).save(),
                new Role({ name: "admin" }).save()
            ]);
            console.log(valuesrole);
        }
        //adding default Users
        const userfoundwrc = await User.findOne({ email: "wilmer@deep-up.com" });
        if (!(userfoundwrc)) {
            const valuesuserwrc = await Promise.all([
                userController.createUserController({ email:"wilmer@deep-up.com", roles:[{name:"user"},{name:"admin"}], name: "Wilmer Rodriguez", password:"f258fd4be69e344206dac39184f56d3a65e1063c4a92148f623e2f2a116acafbb4b72cab4f45572e84a49a1ab447853150e0f58bb8719b689074853c4dc62d58" })
            ]);
            console.log(valuesuserwrc);
        }
        const userfoundcam = await User.findOne({ email: "camilo@deep-up.com" });
        if (!(userfoundcam)) {
            const valuesusercam = await Promise.all([
                userController.createUserController({ email:"camilo@deep-up.com", roles:[{name:"user"},{name:"admin"}], name: "Camilo Rojas", password:"dc2cfd10b04e66285a89a7856bccb7de133fb0130b266ac23fc0b38a7ac2709ff37f80501c2fb452e6f5ab12cc8173d707a2a92735d371d13399a0dcacd6f5fa" })
            ]);
            console.log(valuesusercam);
        }


    } catch (error) {
        console.error(error);
    }
}