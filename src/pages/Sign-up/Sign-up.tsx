import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks';
import {toggleOnLogInPage} from '../../store/login/login';

function SignUp() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(toggleOnLogInPage());
        return () => {
            dispatch(toggleOnLogInPage());
        };
    });

    return <div>SignUp Component</div>;
}

export {SignUp};
