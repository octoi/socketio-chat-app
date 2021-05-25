import { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import { fetchRooms } from '../../api/fetchRooms';
import Room from './Room';

export default function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetchRooms().then(allRooms => {
            allRooms.map(room => {
                delete room.users
                return room;
            })
            setRooms(allRooms.reverse());
        }).catch(() => alert("err"))
    }, []);

    return (
        <section>
            <Text fontSize="xl" color="grey" mb={10}>All Rooms</Text>
            {rooms.map(room => <Room room={room} key={room?._id} />)}
        </section>
    )
}
