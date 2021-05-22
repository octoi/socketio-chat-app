import { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalFooter } from '@chakra-ui/react';
import { Button, Input, Textarea } from '@chakra-ui/react';

export default function NewRoom({ isOpen, onClose }) {
    const [roomName, setRoomName] = useState("");
    const [roomDescription, setRoomDescription] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        if (roomName.trim().length === 0 || roomDescription.trim().length === 0) {
            setCanSubmit(false);
            return
        }
        setCanSubmit(true)
    }, [roomName, roomDescription]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
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
                    <Button disabled={!canSubmit} variant="outline">Create</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
