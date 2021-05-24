import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const fetchRooms = () => {
    return new Promise((resolve, reject) => {
        const url = `${SERVER_URL}/room`;

        axios.get(url).then(res => {
            if (res.status) resolve(res.data.message);
            else reject(res.data.message);
        }).catch(reject);
    });
}