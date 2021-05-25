import React from 'react';
import useAppContext from '../../hooks/useAppContext';
import { Flex, Text } from '@chakra-ui/react';

export default function ChatMsgContainer() {

    const chats = [
        {
            message: "Hello this is a message",
            user: {
                name: "someone",
                email: "someone@email.com"
            }
        },
        {
            message: "Hello this is a message",
            user: {
                name: "user",
                email: "user@email.com"
            }
        },
        {
            message: "Hello this is a message",
            user: {
                name: "someone",
                email: "someone@email.com"
            }
        },
        {
            message: "Hello this is a message",
            user: {
                name: "user",
                email: "user@email.com"
            }
        },
        {
            message: "Hello this is a message",
            user: {
                name: "someone",
                email: "someone@email.com"
            }
        },
        {
            message: "Hello this is a message",
            user: {
                name: "user",
                email: "user@email.com"
            }
        },
    ]

    return (
        <div style={{ height: "75vh", overflowX: "hidden", margin: "20px 0px" }}>
            {chats.map(chat => <ChatBubble chat={chat} />)}
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
