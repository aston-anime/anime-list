import {Link} from 'react-router-dom';
import {AppRoute} from '../../routing/AppRoute';
import {Logo} from '../Logo/Logo';
import {useAppSelector} from '../../hooks';
import {getOnLogInPageFlag} from '../../store/login/selectors';
import s from './Header.module.css';

function Header() {
    const onLogInPageFlag = useAppSelector(getOnLogInPageFlag);

    return (
        <header className={`${s.header} bg-primary`}>
            <Logo />
            <div className={s.container}>
                <button type="button" className="btn btn-secondary">
                    Theme
                </button>
                {!onLogInPageFlag && (
                    <>
                        <Link className={`${s.btn} btn btn-info`} to={AppRoute.LogIn}>
                            Log in
                        </Link>
                        <Link className={`${s.btn} btn btn-info`} to={AppRoute.SignUp}>
                            Sign up
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}

export {Header};
