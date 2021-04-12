import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref:"Role",
        type:mongoose.Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model("User", userSchema);