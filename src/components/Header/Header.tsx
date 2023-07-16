import {Link, useLocation} from 'react-router-dom';
import {useContext} from 'react';
import cn from 'classnames';
import {AppRoute} from '../../routing/AppRoute';
import {Logo} from '../Logo/Logo';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthStatus, getUser} from '../../store/auth/selectors';
import {logOut} from '../../store/auth/auth';
import {ThemeContext} from '../../services/theme/ThemeProvider';
import {Button} from '../Button/Button';
import styles from './Header.module.css';

function Header() {
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const authStatus = useAppSelector(getAuthStatus);
    const userName = useAppSelector(getUser);
    const {theme, toggleTheme} = useContext(ThemeContext);

    const btnClasses = cn('btn', styles.btn, {[styles.light]: theme === 'light'});

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
                            onClick={() => {
                                dispatch(logOut());
                            }}
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
