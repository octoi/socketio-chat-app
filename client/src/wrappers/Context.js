import cookie from 'js-cookie';
import { createContext, useState, useEffect } from 'react';

export const ContextState = createContext();

export function Context({ children }) {
    const [user, setUser] = useState();
    const [socket, setSocket] = useState();

    const logout = () => {
        cookie.remove("user");
        setUser();
    }

    useEffect(() => {
        if (user) {
            cookie.set("user", JSON.stringify(user), { expires: 7 })
            return;
        }

        let userFromCookie = cookie.get("user");
        if (userFromCookie) setUser(JSON.parse(userFromCookie));
    }, [user]);

    const sharedData = {
        user,
        setUser,
        logout,
        socket,
        setSocket
    }

    return (
        <ContextState.Provider value={sharedData}>
            {children}
        </ContextState.Provider>
    );
}