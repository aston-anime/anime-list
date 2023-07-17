/* eslint-disable @typescript-eslint/no-explicit-any */
import {Link, useLocation} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import cn from 'classnames';

import {AppRoute} from '../../routing/AppRoute';
import {Logo} from '../Logo/Logo';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthStatus, getUserName} from '../../store/auth/selectors';
import {logOut} from '../../store/auth/auth';
import {ThemeContext} from '../../services/theme/ThemeProvider';
import {Button} from '../Button/Button';
import {getFavorite} from '../../store/favorite/favorite';
import {getFavoriteSelector} from '../../store/favorite/selectors';
import {AnimeWithId} from '../../types/animeData';
import {localStorageUtil} from '../../utils/localStorage';

import styles from './Header.module.css';

function Header() {
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const authStatus = useAppSelector(getAuthStatus);
    const userName: any = useAppSelector(getUserName);
    const favorite = useAppSelector(getFavoriteSelector);
    const {theme, toggleTheme} = useContext(ThemeContext);

    const btnClasses = cn('btn', styles.btn, {[styles.light]: theme === 'light'});

    const handleLogoutClick = () => {
        localStorageUtil.setAuth('');
        dispatch(logOut());
    };

    useEffect(() => {
        if (authStatus && !favorite.length) {
            const favoriteLS = JSON.parse(localStorage.getItem(userName)!).favorite.map(
                (item: AnimeWithId) => item
            );
            dispatch(getFavorite(favoriteLS));
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authStatus, userName]);

    return (
        <header
            className={cn(
                styles.header,
                {'bg-primary': theme === 'dark'},
                {'bg-info': theme === 'light'}
            )}
        >
            <Logo />
            <div className={styles.container}>
                {authStatus ? (
                    <div className={styles.container}>
                        <p
                            className={cn(
                                'badge',
                                'bg-dark',
                                ' rounded-pill',
                                styles.user,
                                {
                                    [styles.light]: theme === 'light',
                                },
                                {
                                    'text-body': theme === 'dark',
                                }
                            )}
                        >
                            {userName}
                        </p>
                        <Link className={btnClasses} to={AppRoute.Favorites}>
                            Liked
                        </Link>
                        <Link className={btnClasses} to={AppRoute.History}>
                            History
                        </Link>
                        <Link
                            className={`${styles.btn} btn text-warning`}
                            to={AppRoute.Main}
                            onClick={handleLogoutClick}
                        >
                            Log out
                        </Link>
                    </div>
                ) : (
                    <div className={styles.container}>
                        {pathname !== '/anime-list/login' && (
                            <Link className={btnClasses} to={AppRoute.LogIn}>
                                Log in
                            </Link>
                        )}
                        {pathname !== '/anime-list/signup' && (
                            <Link className={btnClasses} to={AppRoute.SignUp}>
                                Sign up
                            </Link>
                        )}
                    </div>
                )}
                <Button onClick={toggleTheme} variant="secondary">
                    Theme
                </Button>
            </div>
        </header>
    );
}

export {Header};
