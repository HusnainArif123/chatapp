import mongoose from "mongoose";

const userFriendSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: Number,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

const UserFriends =
    mongoose.models.UserFriends ||
    mongoose.model("UserFriends", userFriendSchema);

export default UserFriends;
