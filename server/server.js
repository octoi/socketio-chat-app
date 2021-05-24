const express = require("express");
const mongoose = require("mongoose");
const socketIo = require("socket.io");
const http = require("http");
const cors = require("cors")
const router = require("./router");

const app = express();

app.use(express.json())
app.use(cors())
app.use("/", router);

const server = http.createServer(app);

const mongodbURL = process.env.MONGODB || "mongodb://localhost:27017/chatapp";
mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(`[*] MONGO DB CONNECTED TO ${mongodbURL}`);
}).catch(() => {
    console.log(`[-] MONGO DB FAILED TO CONNECT WITH ${mongodbURL}`);
    process.exit(0);
})

const io = socketIo(server);

io.on("connection", socket => {
    console.log(`${socket.id} connected`)
})

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`[*] SERVER STARTED AT PORT ${port}`));
