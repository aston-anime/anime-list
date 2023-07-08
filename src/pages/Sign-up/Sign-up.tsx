import {ChangeEvent, FormEvent, useRef, useState} from 'react';
import {useNavigate} from 'react-router';
import {AppRoute} from '../../routing/AppRoute';
import s from './Sign-up.module.css';

function SignUp() {
    const navigate = useNavigate();

    const passwordRef = useRef<HTMLInputElement | null>(null);
    const userNameRef = useRef<HTMLInputElement | null>(null);

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
        const passwordCurrent = passwordRef.current;
        const userNameCurrent = userNameRef.current;

        if (passwordCurrent && userNameCurrent) {
            navigate(AppRoute.Main);
            const userNameInfo = {
                userName: userNameCurrent.value,
                password: userNameCurrent.value,
            };
            localStorage.setItem('userNameInfo', JSON.stringify(userNameInfo));
        }
    };

    return (
        <form
            className={`${s.form} border-primary`}
            action="#"
            method="post"
            onSubmit={handleSubmit}
        >
            <div className={`${s.container} card border-primary `}>
                <div className="form-group">
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
                        ref={userNameRef}
                        required
                        onChange={(e) => {
                            handleUserNameChange(e);
                        }}
                    />
                </div>
                <div className="form-group">
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
                        ref={passwordRef}
                        required
                        onChange={(e) => {
                            handlePasswordChange(e);
                        }}
                    />
                </div>
                <button className={`${s.btn} btn btn-success`} type="submit">
                    Sign up
                </button>
            </div>
        </form>
    );
}

export {SignUp};
