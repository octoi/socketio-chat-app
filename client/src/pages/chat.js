import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import useAppContext from '../hooks/useAppContext';
import ChatHeader from '../components/chat/ChatHeader';
import ChatMsgContainer from '../components/chat/ChatMsgContainer';
import ChatForm from '../components/chat/ChatForm';

export default function Chat() {
    const { roomid: roomId } = useParams();
    const { socket, user } = useAppContext();
    const [room, setRoom] = useState();
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
            } else {
                setRoom(res.message);
            }
        });

    }, [socket, history, roomId, user]);

    return (
        <Container mt={10} maxW="container.xl">
            {room && (
                <div>
                    <ChatHeader roomName={room.name} />
                    <ChatMsgContainer />
                    <ChatForm />
                </div>
            )}
        </Container>
    )
}
