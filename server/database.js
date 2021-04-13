const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

;

module.exports.connect =  async function() {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        });
        console.log(">>> mongoDB is connected");

    } catch (e) {
        console.log(e);
    }
}

