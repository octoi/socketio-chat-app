import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalFooter } from '@chakra-ui/react';

export default function Room({ room }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();

    const joinRoom = () => {
        history.push(`/chat/${room._id}`)
    }

    return (
        <Flex background="#2D3748" width="100%" direction="column" mt={3} p={5} borderRadius={10}>
            <Heading size="md">{room.name}</Heading>
            <Text mt={3} color="gray.400">{room.description}</Text>
            <Flex width="100%" justifyContent="space-between" direction="row">
                <Button mr={1} mt={5} width="100%" colorScheme="teal" onClick={joinRoom}>Join Room</Button>
                <Button ml={1} mt={5} width="100%" onClick={onOpen}>View Host</Button>
            </Flex>

            <Modal
                onClose={onClose}
                isOpen={isOpen}
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Room Host</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex direction="column" alignItems="center" justifyContent="center">
                            <Text fontWeight="bold" fontSize="xl">{room.host.name}</Text>
                            <Text>{room.host.email}</Text>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}
