import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AnimeWithId} from '../../types/animeData';
import {addFavorite, deleteFavorite} from '../../store/favorite/favorite';
import {getFavoriteSelector} from '../../store/favorite/selectors';
import {getAuthStatus, getUserName} from '../../store/auth/selectors';
import {getUserInfoFromLS, setFavoriteToLS} from '../../utils/getSetlocalStorage';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {FavoriteSvg} from '../FavoriteSvg/FavoriteSvg';
import {StarSvg} from '../StartSvg/StarSvg';

import styles from './Card.module.css';

function Card({id, title, image, ranking, episodes}: AnimeWithId) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const favorite = useAppSelector(getFavoriteSelector);
    const authStatus = useAppSelector(getAuthStatus);
    const userName: string = useAppSelector(getUserName);

    const [isFavorite, setIsFavorite] = useState<boolean>(
        !!favorite.find((item) => item.id === id)
    );

    const userInfo: string | null = getUserInfoFromLS(userName);

    const handleLikeClick = (idAnime: number) => {
        if (isFavorite) {
            dispatch(deleteFavorite(idAnime));
            setIsFavorite(false);
            return;
        }

        dispatch(addFavorite({id, title, image, ranking, episodes}));
        setIsFavorite(true);
    };

    const handleDelailedPageClick = (idAnime: number) => {
        navigate(`detailed-item/${idAnime}`);
    };

    useEffect(() => {
        if (authStatus) {
            setFavoriteToLS(userName, userInfo, favorite);
        }
    }, [favorite, userInfo, userName, isFavorite, authStatus]);

    return (
        <article className={`${styles.card} card border-primary`}>
            {authStatus ? (
                <button
                    className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}
                    type="button"
                    onClick={() => handleLikeClick(id)}
                >
                    <FavoriteSvg />
                </button>
            ) : null}
            <div className={`${styles.img_wrp}`}>
                <img className={`${styles.img}`} src={image} alt={title} />
            </div>
            <div className={styles.card_body}>
                <div className={styles.card_characteristics}>
                    <div className={styles.ranking}>
                        <StarSvg />
                        <div>{ranking}</div>
                    </div>
                    <div className={styles.episodes}>{episodes} episodes</div>
                </div>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <button
                type="button"
                className={`${styles.view_btn} btn btn-primary`}
                onClick={() => handleDelailedPageClick(id)}
            >
                View more
            </button>
        </article>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ranking: PropTypes.number.isRequired,
    episodes: PropTypes.number.isRequired,
};

export {Card};
