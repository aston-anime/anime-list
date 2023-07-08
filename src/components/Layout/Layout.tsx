import {Outlet, useLocation} from 'react-router';
import {Header} from '../Header/Header';

function Layout() {
    const location = useLocation().pathname;
    return (
        <>
            <Header location={location} />
            <Outlet />
        </>
    );
}

export {Layout};
