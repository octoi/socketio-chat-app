const { model, Schema } = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: String
})

const chatRoomSchema = new Schema({
    name: String,
    description: String,
    users: [],
    host: {
        name: String,
        email: String
    },
    chats: []
});

const UserModel = model('users', userSchema);
const ChatRoomModel = model('chats', chatRoomSchema);

model.exports = { UserModel, ChatRoomModel }

