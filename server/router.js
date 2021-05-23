const express = require("express");
const router = express.Router();
const mongo = require("./mongo/handler");


router.post('/user/signup', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    mongo.signUp(name, email, password)
        .then(() => res.send({ messsage: "User created", status: true }).status(200))
        .catch(() => res.send({ messsage: "Failed to create user", status: false }).status(404))
});

router.post('/user/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    mongo.login(email, password)
        .then(user => res.send({ message: user, status: true }).status(200))
        .catch(() => res.send({ message: "Failed", status: false }).status(404))
});

// rooms

router.post('/room/create', (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
    let host = {
        name: req.body.hostname,
        email: req.body.hostemail
    }

    mongo.createRoom(name, description, host)
        .then(room => res.send({ message: room, status: true }).status(200))
        .catch(() => res.send({ message: "Failed", status: false }).status(404))
});

router.get('/room', (req, res) => {
    mongo.getAllRooms()
        .then(rooms => res.send({ message: rooms, status: true }).status(200))
        .catch(() => res.send({ message: "Failed", status: false }).status(404))
});

router.get('/room/:id', (req, res) => {
    mongo.getOneRoom(req.params.id)
        .then(room => res.send({ message: room, status: true }).status(200))
        .catch(() => res.send({ message: "Failed", status: false }).status(404))
});

router.delete('/room/:id', (req, res) => {
    mongo.deleteOneRoom(req.params.id, req.body.email)
        .then(data => res.send({ message: data, status: true }).status(200))
        .catch(() => res.send({ message: "Failed", status: false }).status(404))
});

module.exports = router;