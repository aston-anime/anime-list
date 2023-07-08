import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../routing/AppRoute';
import {Logo} from '../Logo/Logo';
import s from './Header.module.css';

function Header() {
    const location = useLocation().pathname;

    return (
        <header className={`${s.header} bg-primary`}>
            <Logo />
            <div className={s.container}>
                <button type="button" className={`${s.btn} btn btn-secondary`}>
                    Theme
                </button>
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
            </div>
        </header>
    );
}

export {Header};
