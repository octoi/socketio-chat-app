const { UserModel, ChatRoomModel } = require("./model");

const signUp = (name, email, password) => {
    return new Promise((resolve, reject) => {
        const user = new UserModel({ name, email, password });

        user.save().then(() => {
            console.log(`[+] REGISTERED ${email}`);
            resolve();
        }).catch(() => {
            console.log(`[-] FAILED TO REGISTER ${email}`)
            reject();
        });

    });
}


module.exports = {
    signUp
}