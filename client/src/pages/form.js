import { useState, useEffect } from 'react';
import { Button, Container, Flex, Heading, Input } from '@chakra-ui/react';
import { loginUser, registerUser } from '../api/authFunctions';
import { useHistory } from 'react-router-dom';
import useAppContext from '../hooks/useAppContext';

export default function Form() {
    const [isRegisterForm, setIsRegisterForm] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const { setUser, user } = useAppContext();
    const history = useHistory();

    useEffect(() => {
        if (user) history.push("/");

        const urlParams = new URLSearchParams(window.location.search);
        const isRegister = urlParams.get("type") === "register";
        setIsRegisterForm(isRegister);
    }, [user]);

    useEffect(() => {
        if (userEmail.trim().length === 0 || userPassword.length < 6 || (isRegisterForm && userName.trim().length === 0)) {
            setCanSubmit(false)
            return;
        }

        setCanSubmit(true)
    }, [userName, userEmail, userPassword, isRegisterForm]);

    const login = () => {
        loginUser({ email: userEmail, password: userPassword }).then(data => {
            delete data?.password;
            setUser(data)
        })
    }

    const register = () => {
        const userData = { email: userEmail, password: userPassword, name: userName };
        registerUser(userData).then(() => {
            delete userData.password;
            setUser(userData)
        })
    }

    return (
        <Container>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex width="100%" direction="column" background="gray.700" p={12} rounded={6}>
                    <Heading mb={6}>{isRegisterForm ? "Register" : "Log In"}</Heading>
                    {isRegisterForm && (
                        <Input
                            placeholder="john doe"
                            variant="filled"
                            mb={6}
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    )}
                    <Input
                        placeholder="john@gmail.com"
                        variant="filled"
                        mb={6}
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <Input
                        placeholder="••••••••"
                        variant="filled"
                        mb={6}
                        type="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    <Button disabled={!canSubmit} colorScheme="teal" mb={6} onClick={isRegisterForm ? register : login}>
                        {isRegisterForm ? "Register" : "Log In"}
                    </Button>
                    <Button variant="link" onClick={() => setIsRegisterForm(!isRegisterForm)}>
                        {isRegisterForm ? "Already have an account ?? login" : "Don't have an account ?? register"}
                    </Button>
                </Flex>
            </Flex>
        </Container>
    );
}