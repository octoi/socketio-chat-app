import { createContext, useState } from 'react';

export const ContextState = createContext();

export function Context({ children }) {
    const [user, setUser] = useState();

    return (
        <ContextState.Provider value={{ user, setUser }}>
            {children}
        </ContextState.Provider>
    );
}