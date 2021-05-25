import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const deleteRoom = (roomId, email) => {
    return new Promise((resolve, reject) => {
        const url = `${SERVER_URL}/room/${roomId}`;

        axios.delete(url, { data: { email } }).then((res) => {
            if (res.data.status) resolve()
            else reject()
        }).catch(reject);
    });
}