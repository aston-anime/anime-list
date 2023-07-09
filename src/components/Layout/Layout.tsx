import {Outlet} from 'react-router';
import {useContext} from 'react';
import cn from 'classnames';
import {Header} from '../Header/Header';
import {ThemeContext} from '../../services/ThemeProvider';
import s from './Layout.module.css';

function Layout() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={cn({[s.layout]: theme === 'light'}, {'text-dark': theme === 'light'})}>
            <Header />
            <Outlet />
        </div>
    );
}

export {Layout};
