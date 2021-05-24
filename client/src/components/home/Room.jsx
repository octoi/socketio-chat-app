import React from 'react';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';

export default function Room() {
    return (
        <Flex background="#2D3748" width="100%" direction="column" mt={3} p={5} borderRadius={10}>
            <Heading size="md">RoomName</Heading>
            <Text mt={3} color="gray.400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, fugiat facilis? Obcaecati aperiam ex itaque. Nobis at voluptatibus aliquid fugit incidunt, quos ullam nihil eaque labore quasi dicta hic reiciendis?</Text>
            <Flex width="100%" justifyContent="space-between" direction="row">
                <Button mr={1} mt={5} width="100%" colorScheme="teal">Join Room</Button>
                <Button ml={1} mt={5} width="100%">View Users</Button>
            </Flex>
        </Flex>
    )
}
