import {Link} from 'react-router-dom';
import {AppRoute} from '../../routing/AppRoute';
import {Logo} from '../Logo/Logo';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={`${styles.header} bg-primary`}>
            <Logo />
            <div className={styles.header__container}>
                <button type="button" className="btn btn-secondary">
                    Theme
                </button>
                <Link className="btn btn-info" to={AppRoute.LogIn}>
                    Log in
                </Link>
                <Link className="btn btn-info" to={AppRoute.SignUp}>
                    Sign up
                </Link>
            </div>
        </header>
    );
}

export {Header};
