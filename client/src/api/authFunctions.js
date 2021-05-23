import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const loginUser = (userData) => {
    return new Promise((resolve, reject) => {
        const url = `${SERVER_URL}/user/login`;

        axios.post(url, userData).then(res => {
            if (res.data.status) resolve(res.data.message);
            else reject(res.data.message);
        }).catch(reject)
    });
}


export const registerUser = (userData) => {
    return new Promise((resolve, reject) => {
        const url = `${SERVER_URL}/user/signup`;

        axios.post(url, userData).then(res => {
            if (res.data.status) resolve(res.data.message);
            else reject(res.data.message);
        }).catch(reject)
    });
}