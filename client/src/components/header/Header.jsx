import React from 'react';
import useAppContext from '../../hooks/useAppContext';
import NewRoom from './NewRoom';
import { Container, Button, Text, Menu, MenuButton, MenuList, MenuItem, useDisclosure } from '@chakra-ui/react';

export default function Header() {
    const { user, logout } = useAppContext();
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Container marginTop="30px" maxW="container.xl" display="flex" justifyContent="space-between">
            <Text fontSize="xl" fontWeight="semibold">CH4T4PP</Text>
            {!user && <Button disabled>Login To Continue</Button>}
            {user && (
                <Menu>
                    <MenuButton as={Button}>{user.name}</MenuButton>
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
