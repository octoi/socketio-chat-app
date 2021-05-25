import { useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';
import useAppContext from '../../hooks/useAppContext';

export default function ChatForm({ socket, roomId }) {
    const [msg, setMsg] = useState("");
    const { user } = useAppContext();

    const sendMessage = () => {
        socket.emit("message", {
            room: roomId,
            chat: {
                message: msg,
                user
            }
        })
    }

    return (
        <Flex mb={10}>
            <Input
                placeholder="Enter Your Message ..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <Button onClick={sendMessage} disabled={!msg} colorScheme="teal">SEND</Button>
        </Flex>
    )
}
