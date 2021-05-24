import React from 'react';
import { Button, Flex, Heading, Text, useToast } from '@chakra-ui/react';
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalFooter } from '@chakra-ui/react';

export default function Room({ room }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    return (
        <Flex background="#2D3748" width="100%" direction="column" mt={3} p={5} borderRadius={10}>
            <Heading size="md">{room.name}</Heading>
            <Text mt={3} color="gray.400">{room.description}</Text>
            <Flex width="100%" justifyContent="space-between" direction="row">
                <Button mr={1} mt={5} width="100%" colorScheme="teal">Join Room</Button>
                <Button ml={1} mt={5} width="100%" onClick={onOpen}>View Users</Button>
            </Flex>

            <Modal
                onClose={onClose}
                isOpen={isOpen}
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Room Users</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Button
                            onClick={() => toast({ isClosable: true, title: room.host.email, status: "info", position: "top-right", description: "Room host" })}
                            mb={5}
                            variant="solid"
                            width="100%"
                        >
                            <Text>{room.host.name}</Text>
                        </Button>
                        {room.users.map((user, id) => (
                            <Button
                                onClick={() => toast({ isClosable: true, title: user.email, status: "info", position: "top-right", description: "Room user" })}
                                mt={2}
                                width="100%"
                                key={id}
                                variant="outline"
                            >
                                <Text>{user.name}</Text>
                            </Button>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}
