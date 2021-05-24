import React from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

export default function Room({ room }) {
    return (
        <Flex background="#2D3748" width="100%" direction="column" mt={3} p={5} borderRadius={10}>
            <Heading size="md">{room.name}</Heading>
            <Text mt={3} color="gray.400">{room.description}</Text>
            <Flex width="100%" justifyContent="space-between" direction="row">
                <Button mr={1} mt={5} width="100%" colorScheme="teal">Join Room</Button>
                <Button ml={1} mt={5} width="100%">View Users</Button>
            </Flex>
        </Flex>
    )
}
