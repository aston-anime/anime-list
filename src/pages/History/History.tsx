import {useNavigate} from 'react-router-dom';

import {Button} from '../../components/Button/Button';

import styles from './History.module.css';

function History() {
    const navigate = useNavigate();
    const backButtonHendler = () => {
        navigate('/anime-list');
    };
    return (
        <div>
            History Component
            <Button onClick={backButtonHendler} variant="primary" className={styles.customButton}>
                ← Back
            </Button>
        </div>
    );
}

export {History};
