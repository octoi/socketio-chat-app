import useAppContext from '../../hooks/useAppContext';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader, ModalFooter, useToast } from '@chakra-ui/react';
import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import { deleteRoom } from '../../api/deleteRoom';

export default function Room({ room }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: alertIsOpen, onOpen: alertOnOpen, onClose: alertOnClose } = useDisclosure()
    const cancelRef = useRef()
    const history = useHistory();
    const toast = useToast();

    const { user } = useAppContext();
    const amIHost = room?.host.email === user?.email;

    const joinRoom = () => {
        history.push(`/chat/${room._id}`)
    }

    const delRoom = () => {
        deleteRoom(room._id, user.email).then(() => window.location.reload()).catch(() => {
            toast({
                title: "Failed to delete room 😓",
                description: "It may be server error",
                isClosable: true,
                status: 'error'
            });
        })
    }

    return (
        <Flex background="#2D3748" width="100%" direction="column" mt={3} p={5} borderRadius={10}>
            <Heading size="md">{room.name}</Heading>
            <Text mt={3} color="gray.400">{room.description}</Text>
            <Button mr={1} mt={5} mb={2} width="100%" colorScheme="teal" onClick={joinRoom}>Join Room</Button>
            <Flex width="100%" justifyContent="space-between" direction="row">
                <Button width="100%" onClick={onOpen}>View Host</Button>
                {amIHost && <Button ml={1} width="100%" onClick={alertOnOpen}>Delete Room</Button>}
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

            <AlertDialog
                motionPreset="slideInBottom"
                leastDestructiveRef={cancelRef}
                onClose={alertOnClose}
                isOpen={alertIsOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Are you sure ?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>Are you sure you want to delete your room</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={alertOnClose}>No</Button>
                        <Button colorScheme="red" ml={3} onClick={delRoom}>Yes</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Flex>
    )
}
