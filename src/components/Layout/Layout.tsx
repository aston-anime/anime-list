import {Outlet} from 'react-router';
import {useContext, useEffect} from 'react';
import cn from 'classnames';
import {Header} from '../Header/Header';
import {ThemeContext} from '../../services/theme/ThemeProvider';
import {localStorageUtil} from '../../utils/localStorage';
import {useAppDispatch} from '../../hooks';
import {logIn} from '../../store/auth/auth';
import {setFavorites} from '../../store/favorite/favorite';
import styles from './Layout.module.css';

const lightClass = `${styles.layout} text-dark`;

function Layout() {
    const {theme} = useContext(ThemeContext);
    const dispatch = useAppDispatch();
    const userName = localStorageUtil.getAuth();

    useEffect(() => {
        if (userName) {
            const userInfo = localStorageUtil.getUser(userName);
            dispatch(logIn(userInfo));
            dispatch(setFavorites(userInfo?.favorites));
        }
    }, [dispatch, userName]);

    return (
        <div className={cn({[lightClass]: theme === 'light'})}>
            <Header />
            <Outlet />
        </div>
    );
}

export {Layout};
