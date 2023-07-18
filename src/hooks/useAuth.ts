import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {getAuthStatus} from '../store/auth/selectors';
import {useAppSelector} from '.';

const useAuth = () => {
    const isAuthenticated = useAppSelector(getAuthStatus);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/anime-list/login');
        }
    }, [isAuthenticated, navigate]);

    return isAuthenticated;
};

export {useAuth};
