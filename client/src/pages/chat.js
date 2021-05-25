import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import useAppContext from '../hooks/useAppContext';
import ChatHeader from '../components/chat/ChatHeader';

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
        <Container mt={10} maxW="container.xl">
        </Container>
    )
}
