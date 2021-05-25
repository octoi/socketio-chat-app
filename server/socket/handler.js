const { joinRoom, leftRoom } = require("../mongo/handler");

module.exports = socket => {
    console.log(`[+] ${socket.id} client connected`);

    socket.on('joinRoom', (data, callback) => {
        const { userData, roomId } = data;
        socket.join(roomId);

        socket.broadcast.emit("message", {
            message: `${userData.name} has joined the gang 🥳`,
            user: {
                name: "bot",
                email: "Official chatapp bot"
            }
        });

        joinRoom(roomId, { ...userData, socket: socket.id })
            .then(roomData => {

                callback({ message: roomData, status: true })

                socket.emit("message", {
                    message: `Welcome ${userData.name} to ${roomData.name} 😀`,
                    user: {
                        name: "bot",
                        email: "Official chatapp bot"
                    }
                });

            })
            .catch(() => callback({ message: "No such room", status: false }))
    });

    socket.on("message", data => {
        socket.broadcast.emit("message", data.chat);
        socket.emit("message", data.chat);
    })

    socket.on('disconnect', () => {
        leftRoom(socket.id).then(userData => {
            socket.broadcast.emit("message", {
                message: `${userData?.name} left the chat 😭`,
                user: {
                    name: "bot",
                    email: "Official chatapp bot"
                }
            });
        })
    });
}