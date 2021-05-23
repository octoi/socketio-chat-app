import React from 'react';
import { Button, Flex, Heading, Input } from '@chakra-ui/react';

export default function Form() {

    const login = () => {

    }

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background="gray.700" p={12} rounded={6}>
                <Heading mb={6}>Log In</Heading>
                <Input placeholder="john@gmail.com" variant="filled" mb={6} type="email" />
                <Input placeholder="••••••••" variant="filled" mb={6} type="password" />
                <Button colorScheme="teal" mb={6}>Log In</Button>
                <Button variant="link">Don't have an account ?? register</Button>
            </Flex>
        </Flex>
    );
}