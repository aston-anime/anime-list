import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../routing/AppRoute';
import {Logo} from '../Logo/Logo';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthStatus, getUser} from '../../store/auth/selectors';
import {toggleAuth} from '../../store/auth/auth';
import s from './Header.module.css';

function Header() {
    const dispatch = useAppDispatch();
    const location = useLocation().pathname;
    const authStatus = useAppSelector(getAuthStatus);
    const userName = useAppSelector(getUser);

    return (
        <header className={`${s.header} bg-primary`}>
            <Logo />
            <div className={s.container}>
                {authStatus ? (
                    <div className={s.container}>
                        <p className={`${s.user} text-body`}>{userName}</p>
                        <Link className={`${s.btn} btn btn-info`} to={AppRoute.Favorites}>
                            Liked
                        </Link>
                        <Link className={`${s.btn} btn btn-info`} to={AppRoute.History}>
                            History
                        </Link>
                        <Link
                            className={`${s.btn} btn btn-danger`}
                            to={AppRoute.Main}
                            onClick={() => {
                                dispatch(toggleAuth());
                            }}
                        >
                            Log out
                        </Link>
                    </div>
                ) : (
                    <div className={s.container}>
                        {location !== '/anime-list/login' && (
                            <Link className={`${s.btn} btn btn-info`} to={AppRoute.LogIn}>
                                Log in
                            </Link>
                        )}
                        {location !== '/anime-list/signup' && (
                            <Link className={`${s.btn} btn btn-info`} to={AppRoute.SignUp}>
                                Sign up
                            </Link>
                        )}
                    </div>
                )}
                <button type="button" className={`${s.btn} btn btn-secondary`}>
                    Theme
                </button>
            </div>
        </header>
    );
}

export {Header};
