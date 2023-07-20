import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {CardList} from '../../components/CardList/CardList';
import {getFavorites} from '../../store/favorite/selectors';
import {AnimeWithId} from '../../types/animeData';
import {Button} from '../../components/Button/Button';

import styles from './Favorites.module.css';

function Favorites() {
    const navigate = useNavigate();

    const favorites: AnimeWithId[] = useAppSelector(getFavorites);

    const backButtonHandler = () => {
        navigate('/anime-list');
    };

    return (
        <div className={styles.container}>
            {favorites.length ? (
                <div className="main-container">
                    <div className="card-container">
                        {favorites && <CardList cards={favorites} />}
                    </div>
                </div>
            ) : (
                <div className={styles.emptyFavorites}>Favorites are empty</div>
            )}
            <Button onClick={backButtonHandler} variant="primary" className={styles.customButton}>
                ← Back
            </Button>
        </div>
    );
}

export {Favorites};
