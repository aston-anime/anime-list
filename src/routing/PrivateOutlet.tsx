import {Navigate, Outlet} from 'react-router-dom';
import {useAppSelector} from '../hooks';
import {getAuthStatus} from '../store/auth/selectors';

function PrivateOutlet() {
    const isAuthenticated = useAppSelector(getAuthStatus);

    return isAuthenticated ? <Outlet /> : <Navigate to="/anime-list/login" />;
}

export {PrivateOutlet};
