import {Link} from 'react-router-dom';
import {useContext} from 'react';
import cn from 'classnames';
import {AppRoute} from '../../routing/AppRoute';
import {ThemeContext} from '../../services/theme/ThemeProvider';
import styles from './Logo.module.css';

function Logo() {
    const {theme} = useContext(ThemeContext);

    return (
        <Link className={styles.logo} to={AppRoute.Main}>
            <h1 className={cn(styles.logo__title, {[styles.light]: theme === 'light'})}>
                Euphoric Serenity
            </h1>
        </Link>
    );
}

export {Logo};
