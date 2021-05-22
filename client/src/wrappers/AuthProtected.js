import useAppContext from '../hooks/useAppContext';
import { useHistory } from 'react-router-dom';

export default function AuthProtected({ children }) {
    const { user } = useAppContext();
    const history = useHistory();

    if (!user) {
        history.push("/login")
    }

    return (
        <div>{children}</div>
    );
}
