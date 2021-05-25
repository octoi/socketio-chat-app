import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const createRoom = (roomData) => {
    return new Promise((resolve, reject) => {
        const url = `${SERVER_URL}/room/create`;

        axios.post(url, roomData).then(res => {
            if (res.data.status) resolve(res.data.message)
            else reject(res.data.message);
        }).catch(reject);
    });
}