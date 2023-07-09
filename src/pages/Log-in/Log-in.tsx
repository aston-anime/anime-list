import {useState, ChangeEvent, FormEvent} from 'react';
import classNames from 'classnames';
import {useNavigate} from 'react-router';
import {AppRoute} from '../../routing/AppRoute';
import {setUser, toggleAuth} from '../../store/auth/auth';
import {useAppDispatch} from '../../hooks';
import s from './Log-in.module.css';

function LogIn() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

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
        const userInfo = localStorage.getItem(userName);

        if (!userInfo) {
            setInvalidLogin(true);
        } else if (JSON.parse(userInfo).password !== password) {
            setInvalidPassword(true);
        } else {
            dispatch(toggleAuth());
            dispatch(setUser(JSON.parse(userInfo).userName));
            navigate(AppRoute.Main);
        }
    };

    return (
        <form className={`${s.form} border-primary`} action="#" onSubmit={handleSubmit}>
            <div className={`${s.container} card border-primary `}>
                <div className={classNames('form-group', {[s.loginError]: invalidLogin})}>
                    <label htmlFor="userName" className="form-label mt-4">
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
                <div className={classNames('form-group', {[s.passwordError]: invalidPassword})}>
                    <label htmlFor="password" className="form-label mt-4">
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
                <button className={`${s.btn} btn btn-success`} type="submit">
                    Log in
                </button>
            </div>
        </form>
    );
}

export {LogIn};
