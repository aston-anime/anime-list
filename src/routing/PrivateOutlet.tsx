import {Navigate, Outlet} from 'react-router-dom';
import {localStorageUtil} from '../utils/localStorage';

function PrivateOutlet() {
    const isAuth = localStorageUtil.getAuth();

    return isAuth ? <Outlet /> : <Navigate to="/anime-list/login" />;
}

export {PrivateOutlet};
