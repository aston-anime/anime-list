import {useNavigate} from 'react-router-dom';

import {useAppSelector} from '../../hooks';
import {CardList} from '../../components/CardList/CardList';
import {getFavoriteSelector} from '../../store/favorite/selectors';
import {AnimeWithId} from '../../types/animeData';
import {Button} from '../../components/Button/Button';

import styles from './Favorites.module.css';

function Favorites() {
    const navigate = useNavigate();

    const favorite: AnimeWithId[] = useAppSelector(getFavoriteSelector);

    const backButtonHendler = () => {
        navigate('/anime-list');
    };

    return (
        <div className={styles.container}>
            {favorite.length ? (
                <div className="main-container">
                    <div className="card-container">
                        {favorite && <CardList cards={favorite} />}
                    </div>
                </div>
            ) : (
                <div className={styles.emptyFavorites}>Favorites are empty</div>
            )}
            <Button onClick={backButtonHendler} variant="primary" className={styles.customButton}>
                ← Back
            </Button>
        </div>
    );
}

export {Favorites};
