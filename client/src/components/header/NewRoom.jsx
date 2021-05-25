import { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, useToast, Spinner } from '@chakra-ui/react';
import { Button, Input, Textarea } from '@chakra-ui/react';
import { createRoom } from '../../api/createRoom';

export default function NewRoom({ isOpen, onClose, user }) {
    const [roomName, setRoomName] = useState("");
    const [roomDescription, setRoomDescription] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    useEffect(() => {
        if (roomName.trim().length === 0 || roomDescription.trim().length === 0) {
            setCanSubmit(false);
            return
        }
        setCanSubmit(true)
    }, [roomName, roomDescription]);

    const createRoomBtnHandler = () => {
        setIsLoading(true)
        let roomData = {
            name: roomName,
            description: roomDescription,
            hostname: user.name,
            hostemail: user.email
        }
        createRoom(roomData).then(() => window.location.reload()).catch(() => {
            setIsLoading(false)
            toast({
                title: "Failed to create room 😢",
                description: "There maybe some issues with server",
                isClosable: true,
                status: "error"
            })
        });
    }

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create New Room</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input
                        value={roomName}
                        variant="filled"
                        onChange={(e) => setRoomName(e.target.value)}
                        placeholder="Enter your room name"
                    />
                    <Textarea
                        value={roomDescription}
                        mt={3}
                        variant="filled"
                        onChange={(e) => setRoomDescription(e.target.value)}
                        placeholder="Type your room description"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={createRoomBtnHandler} disabled={!canSubmit || isLoading} variant="outline">
                        {isLoading ? <Spinner /> : "Create"}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
