import React from 'react';
import Rooms from '../components/home/Rooms';
import { Container } from '@chakra-ui/react';

export default function Home() {
    return (
        <Container marginTop="30px" maxW="container.xl">
            <Rooms />
        </Container>
    )
}
