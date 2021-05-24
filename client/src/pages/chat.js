import useAppContext from '../hooks/useAppContext';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function Chat() {
    const { roomid: roomId } = useParams();
    const { socket, user } = useAppContext();
    const history = useHistory();

    useEffect(() => {
        if (!socket) history.push('/');

        const data = {
            userData: user,
            roomId
        }
        socket?.emit("joinRoom", data, (res) => {
            if (!res.status) {
                alert(`You are in wrong place ${user?.name}`);
                history.push("/")
            }
        });

    }, [socket, history, roomId, user]);

    return (
        <div>

        </div>
    )
}
