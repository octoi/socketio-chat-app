import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { Container, Button, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

export default function Header() {
    const { user } = useAuthContext();

    return (
        <Container marginTop="30px" maxW="container.xl" display="flex" justifyContent="space-between">
            <Text fontSize="xl" fontWeight="semibold">CH4T4PP</Text>
            {/* <Button>username</Button> */}
            <Menu>
                <MenuButton as={Button}>username</MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </Container>
    )
}
