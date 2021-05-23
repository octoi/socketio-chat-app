import useAppContext from '../hooks/useAppContext';
import { useHistory } from 'react-router-dom';

export default function AuthProtected({ children }) {
    const { user } = useAppContext();
    const history = useHistory();

    if (!user) {
        history.push("/form")
    }

    return (
        <div>{children}</div>
    );
}
