const { UserModel, ChatRoomModel } = require("./model");

const signUp = (name, email, password) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email }).then(existedUser => {
            if (existedUser) {
                reject();
                return;
            }
            const user = new UserModel({ name, email, password });
            user.save().then(() => resolve()).catch(reject);
        }).catch(() => {
            reject();
        })
    });
}

const login = (email, password) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email }).then(user => {
            if (user.password === password) resolve(user);
            reject();
        }).catch(reject)
    });
}

const createRoom = (name, description, host) => {
    return new Promise((resolve, reject) => {
        const room = new ChatRoomModel({ name, description, host, chats: [], users: [] });
        room.save().then(roomData => resolve(roomData)).catch(reject);
    });
}

const getAllRooms = () => {
    return new Promise((resolve, reject) => {
        ChatRoomModel.find().then(rooms => resolve(rooms)).catch(reject)
    });
}

const getOneRoom = (id) => {
    return new Promise((resolve, reject) => {
        ChatRoomModel.findById(id).then(room => resolve(room)).catch(reject);
    });
}

const deleteOneRoom = (id, email) => {
    return new Promise((resolve, reject) => {
        getOneRoom(id).then(room => {
            if (room.host.email == email) {
                ChatRoomModel.deleteOne({ _id: id }).then(data => resolve(data)).catch(reject);
                return;
            }
            reject();
        }).catch(reject)
    });
}

// user & room

const joinRoom = (id, user) => {
    return new Promise(async (resolve, reject) => {
        const room = await ChatRoomModel.findById(id);

        if (!room) {
            reject();
        } else {
            let users = room.users;
            users.push(user);
            room.users = users;

            await room.save();
            resolve(room);
        }

    });
}

module.exports = {
    signUp,
    login,
    createRoom,
    getAllRooms,
    getOneRoom,
    deleteOneRoom,
    joinRoom,
}