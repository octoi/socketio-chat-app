import { useState, useEffect, useRef } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import useAppContext from '../../hooks/useAppContext';

export default function ChatMsgContainer({ socket }) {
    const [chats, setChats] = useState([]);
    const scrollToObject = useRef();

    useEffect(() => {
        socket.on("message", message => {
            setChats([...chats, message]);
            scrollToObject.current.scrollIntoView({ behavior: 'smooth' });
        });
    }, [chats, socket]);

    return (
        <div style={{ height: "75vh", overflowX: "hidden", margin: "20px 0px" }}>
            {chats.map((chat, id) => <ChatBubble key={id} chat={chat} />)}
            <span ref={scrollToObject}></span>
        </div>
    )
}

function ChatBubble({ chat }) {
    const { user } = useAppContext();

    const isMyMessage = chat.user.email === user.email;

    return (
        <Flex alignItems="center" flexDirection={isMyMessage ? "row-reverse" : "row"} marginTop="15px">
            <div style={{
                margin: "0px 10px",
                background: "var(--chakra-colors-whiteAlpha-200)",
                padding: "15px 10px",
                borderRadius: "10px",
                textAlign: isMyMessage ? "right" : "left",
                width: "fit-content",
            }}>
                <Text color="gray.400">{chat.user.name}</Text>
                <Text color="gray.500" fontSize="x-small">{chat.user.email}</Text>
                {chat.message}
            </div>
        </Flex>
    );
}
