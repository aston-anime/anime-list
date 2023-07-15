import {Outlet} from 'react-router';
import {useContext} from 'react';
import cn from 'classnames';
import {Header} from '../Header/Header';
import {ThemeContext} from '../../services/theme/ThemeProvider';
import {LocalStorageUtil} from '../../utils/LocalStorageUtil';
import {useAppDispatch} from '../../hooks';
import {setUser, logIn} from '../../store/auth/auth';
import styles from './Layout.module.css';

const lightClass = `${styles.layout} text-dark`;

function Layout() {
    const {theme} = useContext(ThemeContext);
    const dispatch = useAppDispatch();

    const userName = LocalStorageUtil.findAuthUser();
    if (userName) {
        dispatch(setUser(userName));
        dispatch(logIn());
    }

    return (
        <div className={cn({[lightClass]: theme === 'light'})}>
            <Header />
            <Outlet />
        </div>
    );
}

export {Layout};
