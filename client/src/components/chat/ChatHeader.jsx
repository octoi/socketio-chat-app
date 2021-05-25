import React from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';

export default function ChatHeader({ roomName }) {
    return (
        <Flex justifyContent="space-between">
            <Text fontSize="xl" fontWeight="semibold">{roomName}</Text>
            <Button onClick={() => window.location.href = "/"} variant="outline">Leave Room</Button>
        </Flex>
    )
}
