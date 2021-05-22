import { useContext } from 'react';
import { ContextState } from '../wrappers/Context';

export default function useAuthContext() {
    return useContext(ContextState);
}