import { useState, useEffect } from 'react';
import { Button, Flex, Heading, Input } from '@chakra-ui/react';

export default function Form() {
    const [isRegisterForm, setIsRegisterForm] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const isRegister = urlParams.get("type") === "register";
        setIsRegisterForm(isRegister);
    }, [])

    const login = () => {
        alert("login")
    }
    const register = () => {
        alert("register")
    }

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background="gray.700" p={12} rounded={6}>
                <Heading mb={6}>{isRegisterForm ? "Register" : "Log In"}</Heading>
                {isRegisterForm && <Input placeholder="john doe" variant="filled" mb={6} type="text" />}
                <Input
                    placeholder="john@gmail.com"
                    variant="filled"
                    mb={6}
                    type="email"
                />
                <Input placeholder="••••••••" variant="filled" mb={6} type="password" />
                <Button colorScheme="teal" mb={6} onClick={isRegisterForm ? register : login}>
                    {isRegisterForm ? "Register" : "Log In"}
                </Button>
                <Button variant="link" onClick={() => setIsRegisterForm(!isRegisterForm)}>
                    {isRegisterForm ? "Already have an account ?? login" : "Don't have an account ?? register"}
                </Button>
            </Flex>
        </Flex>
    );
}