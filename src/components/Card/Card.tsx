import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AnimeWithId} from '../../types/animeData';
import {addFavorite, deleteFavorite} from '../../store/favorite/favorite';
import {getAuthStatus} from '../../store/auth/selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {FavoriteSvg} from '../FavoriteSvg/FavoriteSvg';
import {StarSvg} from '../StartSvg/StarSvg';

import styles from './Card.module.css';

type CardProps = {
    data: AnimeWithId;
    isFavorite: boolean;
};

function Card({data, isFavorite}: CardProps) {
    const {id, title, image, ranking, episodes} = data;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const authStatus = useAppSelector(getAuthStatus);

    const handleLikeClick = (idAnime: string) => {
        if (isFavorite) {
            dispatch(deleteFavorite(idAnime));
            return;
        }
        dispatch(addFavorite(data));
    };

    const handleDetailedPageClick = (idAnime: string) => {
        navigate(`/anime-list/detailed-item/${idAnime}`, {replace: true});
    };

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
                onClick={() => handleDetailedPageClick(id)}
            >
                View more
            </button>
        </article>
    );
}

Card.defaultProps = {
    data: null,
};

Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        ranking: PropTypes.number.isRequired,
        episodes: PropTypes.number.isRequired,
    }),
};

export {Card};
