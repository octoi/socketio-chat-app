module.exports = socket => {
    console.log(`[+] ${socket.id} client connected`)

    socket.on('disconnect', () => {
        console.log(`[-] ${socket.id} client disconnected`)
    })
}