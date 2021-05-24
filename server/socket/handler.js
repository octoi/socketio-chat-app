const { joinRoom } = require("../mongo/handler");

module.exports = socket => {
    console.log(`[+] ${socket.id} client connected`);

    socket.on('joinRoom', (data, callback) => {
        const { userData, roomId } = data;
        socket.join(roomId);
        joinRoom(roomId, userData)
            .then(roomData => callback({ message: roomData, status: true }))
            .catch(() => callback({ message: "No such room", status: false }))
    });

    socket.on('disconnect', () => {
        console.log(`[-] ${socket.id} client disconnected`)
    });
}