import {ChangeEvent, FormEvent, useContext, useState} from 'react';
import {useNavigate} from 'react-router';
import cn from 'classnames';
import {AppRoute} from '../../routing/AppRoute';
import {useAppDispatch} from '../../hooks';
import {logIn, setUser} from '../../store/auth/auth';
import {ThemeContext} from '../../services/theme/ThemeProvider';
import {LocalStorageUtil} from '../../utils/LocalStorageUtil';
import styles from './Sign-up.module.css';

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {theme} = useContext(ThemeContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(AppRoute.Main);
        dispatch(setUser(userName));
        dispatch(logIn());

        const userInfo = {
            userName,
            password,
            auth: true,
        };
        LocalStorageUtil.setItem(userName, JSON.stringify(userInfo));
    };

    return (
        <form className={`${styles.form} border-primary`} action="#" onSubmit={handleSubmit}>
            <div className={`${styles.container} card border-primary `}>
                <div className="form-group">
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
                <div className="form-group">
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
                    Sign up
                </button>
            </div>
        </form>
    );
}

export {SignUp};
