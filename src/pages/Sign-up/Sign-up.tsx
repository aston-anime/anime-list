import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks';
import {toggleOnSignUpPage} from '../../store/signup/signup';

function SignUp() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(toggleOnSignUpPage());
        return () => {
            dispatch(toggleOnSignUpPage());
        };
    });

    return <div>SignUp Component</div>;
}

export {SignUp};
