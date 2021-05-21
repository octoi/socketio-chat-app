const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();
app.use("/", router);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`[*] SERVER STARTED AT PORT ${port}`));
