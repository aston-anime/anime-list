import {Outlet} from 'react-router';
import {useContext} from 'react';
import cn from 'classnames';
import {Header} from '../Header/Header';
import {ThemeContext} from '../../services/theme/ThemeProvider';
import styles from './Layout.module.css';

const lightClass = `${styles.layout} text-dark`;

function Layout() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={cn({[lightClass]: theme === 'light'})}>
            <Header />
            <Outlet />
        </div>
    );
}

export {Layout};
