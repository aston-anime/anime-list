import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {CardList} from '../../components/CardList/CardList';

import styles from './Favorites.module.css';

function Favorites() {
    const navigate = useNavigate();
    const backButtonHendler = () => {
        navigate('/anime-list');
    };

    const [favoritesAnime, setFavoritesAnime] = useState(
        Object.values(localStorage).map((item) => JSON.parse(item))
    );

    return (
        <div className={styles.container}>
            {favoritesAnime.length ? (
                <div className="main-container">
                    <div className="card-container">
                        {favoritesAnime && (
                            <CardList
                                cards={favoritesAnime}
                                setFavoritesAnime={setFavoritesAnime}
                            />
                        )}
                    </div>
                </div>
            ) : (
                <div>Favorites are empty</div>
            )}

            <button
                type="button"
                className={`${styles.btn} btn btn-primary`}
                onClick={backButtonHendler}
            >
                Назад
            </button>
        </div>
    );
}

export {Favorites};
