const express = require("express");
const router = express.Router();
const mongo = require("./mongo/handler");


router.post('/user/signup', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    mongo.signUp(name, email, password)
        .then(() => res.send('User created').status(200))
        .catch(() => res.send("Failed to create user").status(404))
})

router.post('/user/login', (req, res) => {

})

module.exports = router;