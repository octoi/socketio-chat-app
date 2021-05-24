import socketIoClient from 'socket.io-client';
import Rooms from '../components/home/Rooms';
import useAppContext from '../hooks/useAppContext';
import { useEffect } from 'react';
import { Container } from '@chakra-ui/react';

export default function Home() {
    const { socket, setSocket } = useAppContext();

    useEffect(() => {
        if (socket) return;

        const serverUrl = process.env.REACT_APP_SERVER_URL;
        const sock = socketIoClient(serverUrl, { transports: ["websocket"] });
        setSocket(sock);

    }, [socket, setSocket]);

    return (
        <Container marginTop="30px" maxW="container.xl">
            <Rooms />
        </Container>
    )
}
