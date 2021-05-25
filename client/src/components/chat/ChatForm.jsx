import { useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';

export default function ChatForm() {
    const [msg, setMsg] = useState("");

    return (
        <Flex mb={10}>
            <Input
                placeholder="Enter Your Message ..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            />
            <Button disabled={!msg} colorScheme="teal">SEND</Button>
        </Flex>
    )
}
