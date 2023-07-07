import {useEffect} from 'react';
import {toggleOnLogInPage} from '../../store/login/login';
import {useAppDispatch} from '../../hooks';

function LogIn() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(toggleOnLogInPage());
        return () => {
            dispatch(toggleOnLogInPage());
        };
    });
    return <div>LogIn Component</div>;
}

export {LogIn};
