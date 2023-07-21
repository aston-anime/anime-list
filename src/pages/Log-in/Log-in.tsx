import {useState, ChangeEvent, FormEvent, useContext} from 'react';
import cn from 'classnames';
import {useNavigate} from 'react-router';
import {AppRoute} from '../../routing/AppRoute';
import {logIn} from '../../store/auth/auth';
import {useAppDispatch} from '../../hooks';
import {ThemeContext} from '../../services/theme/ThemeProvider';
import {localStorageUtil} from '../../utils/localStorage';
import {setFavorites} from '../../store/favorite/favorite';
import styles from './Log-in.module.css';

function LogIn() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {theme} = useContext(ThemeContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [invalidLogin, setInvalidLogin] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
        if (invalidLogin) setInvalidLogin(false);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        if (invalidPassword) setInvalidPassword(false);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userInfo = localStorageUtil.getItem(userName);

        if (!userInfo) {
            setInvalidLogin(true);
        } else if (userInfo.password !== password) {
            setInvalidPassword(true);
        } else {
            dispatch(logIn(userInfo));
            dispatch(setFavorites(userInfo?.favorites));
            navigate(AppRoute.Main);
        }
    };

    return (
        <form className={`${styles.form} border-primary`} action="#" onSubmit={handleSubmit}>
            <div className={`${styles.container} card border-primary `}>
                <div className={cn('form-group', {[styles.loginError]: invalidLogin})}>
                    <label
                        htmlFor="userName"
                        className={cn('form-label mt-4', {'text-dark': theme === 'light'})}
                    >
                        User name
                    </label>
                    <input
                        type="userName"
                        className="form-control"
                        id="userName"
                        name="userName"
                        aria-describedby="userNameHelp"
                        placeholder="Enter userName"
                        value={userName}
                        required
                        onChange={handleUserNameChange}
                    />
                </div>
                <div className={cn('form-group', {[styles.passwordError]: invalidPassword})}>
                    <label
                        htmlFor="password"
                        className={cn('form-label mt-4', {'text-dark': theme === 'light'})}
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        required
                        onChange={handlePasswordChange}
                    />
                </div>
                <button
                    className={cn(
                        'btn',
                        styles.btn,
                        {
                            'btn-success': theme === 'dark',
                        },
                        {
                            'btn-primary': theme === 'light',
                        }
                    )}
                    type="submit"
                >
                    Log in
                </button>
            </div>
        </form>
    );
}

export {LogIn};
