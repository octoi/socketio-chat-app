const { joinRoom, leftRoom } = require("../mongo/handler");

module.exports = socket => {
    console.log(`[+] ${socket.id} client connected`);

    socket.on('joinRoom', (data, callback) => {
        const { userData, roomId } = data;
        socket.join(roomId);
        joinRoom(roomId, { ...userData, socket: socket.id })
            .then(roomData => {
                callback({ message: roomData, status: true })
                socket.emit("message", {
                    message: `Welcome ${userData.name} to ${roomData.name} 😀`,
                    user: {
                        name: "bot",
                        email: "bot@chatapp"
                    }
                });
            })
            .catch(() => callback({ message: "No such room", status: false }))
    });

    socket.on('disconnect', () => leftRoom(socket.id));
}