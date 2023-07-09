import {Link} from 'react-router-dom';
import {useContext} from 'react';
import cn from 'classnames';
import {AppRoute} from '../../routing/AppRoute';
import {ThemeContext} from '../../services/ThemeProvider';
import s from './Logo.module.css';

function Logo() {
    const {theme} = useContext(ThemeContext);

    return (
        <Link className={s.logo} to={AppRoute.Main}>
            <h1 className={cn(s.logo__title, {[s.light]: theme === 'light'})}>Euphoric Serenity</h1>
        </Link>
    );
}

export {Logo};
