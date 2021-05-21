const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();
app.use("/", router);

const mongodbURL = process.env.MONGODB || "mongodb://localhost:27017/chatapp";
mongoose.connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(`[*] MONGO DB CONNECTED TO ${mongodbURL}`);
}).catch(() => {
    console.log(`[-] MONGO DB FAILED TO CONNECT WITH ${mongodbURL}`);
    process.exit(0);
})

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`[*] SERVER STARTED AT PORT ${port}`));
