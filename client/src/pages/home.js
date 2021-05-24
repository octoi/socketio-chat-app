import socketIoClient from 'socket.io-client';
import Rooms from '../components/home/Rooms';
import useAppContext from '../hooks/useAppContext';
import { useEffect } from 'react';
import { Container } from '@chakra-ui/react';

export default function Home() {
    const { socket, setSocket } = useAppContext();
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        if (socket) return;

        let connectionOptions = {
            "force new connection": true,
            "reconnectionAttempts": "Infinity",
            "timeout": 10000,
            "transports": ["websocket"]
        };

        const sock = socketIoClient(serverUrl, connectionOptions);
        setSocket(sock);

        return () => {
            socket?.off();
        }

    }, [socket, setSocket, serverUrl]);

    return (
        <Container marginTop="30px" maxW="container.xl">
            <Rooms />
        </Container>
    )
}
