import {Link} from 'react-router-dom';
import {AppRoute} from '../../routing/AppRoute';
import styles from './Logo.module.css';

function Logo() {
    return (
        <Link className={styles.logo} to={AppRoute.Main}>
            <h1 className={styles.logo__title}>Euphoric Serenity</h1>
        </Link>
    );
}

export {Logo};
