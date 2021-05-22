import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import NewRoom from './NewRoom';
import { Container, Button, Text, Menu, MenuButton, MenuList, MenuItem, useDisclosure } from '@chakra-ui/react';

export default function Header() {
    const { user, logout } = useAuthContext();
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Container marginTop="30px" maxW="container.xl" display="flex" justifyContent="space-between">
            <Text fontSize="xl" fontWeight="semibold">CH4T4PP</Text>
            {user && <Button disabled>Login To Continue</Button>}
            {!user && (
                <Menu>
                    <MenuButton as={Button}>username</MenuButton>
                    <MenuList>
                        <MenuItem onClick={onOpen}>Create</MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            )}
            <NewRoom isOpen={isOpen} onClose={onClose} />
        </Container>
    )
}
