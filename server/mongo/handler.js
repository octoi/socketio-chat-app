const { UserModel, ChatRoomModel } = require("./model");
const bcrypt = require("bcrypt");

const signUp = (name, email, password) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email }).then(existedUser => {
            if (existedUser) {
                reject();
                return;
            }
            bcrypt.hash(password, 10).then(hashedPassword => {
                const user = new UserModel({ name, email, password: hashedPassword });
                user.save().then(() => resolve()).catch(reject);
            }).catch(() => {
                reject();
            })
        }).catch(() => {
            reject();
        })
    });
}

const login = (email, password) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ email }).then(user => {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) resolve(user);
                else reject();
            })
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

const leftRoom = (socketId) => {
    return new Promise((resolve, reject) => {
        let userData;
        getAllRooms().then(rooms => {
            rooms.map(async (room) => {
                if (!room) {
                    reject();
                } else {
                    let users = room.users;
                    users = users.filter(roomUser => {
                        userData = roomUser;
                        return roomUser.socket !== socketId
                    });
                    room.users = users;

                    await room.save();
                    resolve(userData);
                }
            })
        })


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
    leftRoom
}