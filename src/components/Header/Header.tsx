import {Link} from 'react-router-dom';
import {AppRoute} from '../../routing/AppRoute';
import {Logo} from '../Logo/Logo';
import s from './Header.module.css';

type HeaderProps = {
    location: string;
};

function Header({location}: HeaderProps) {
    return (
        <header className={`${s.header} bg-primary`}>
            <Logo />
            <div className={s.container}>
                <button type="button" className="btn btn-secondary">
                    Theme
                </button>
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
        </header>
    );
}

export {Header};
