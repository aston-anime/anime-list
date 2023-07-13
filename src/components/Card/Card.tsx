import {useState} from 'react';
import {useNavigate} from 'react-router';
import PropTypes from 'prop-types';

import {AnimeData} from '../../types/state';

import styles from './Card.module.css';

function Card({_id, title, image, ranking, episodes, setFavoritesAnime = () => {}}: AnimeData) {
    const navigate = useNavigate();

    const [isFavorite, setIsFavorite] = useState<boolean>(
        !!localStorage.getItem(JSON.stringify(_id))
    );

    const handleLikeClick = (idAnime: number) => {
        if (isFavorite) {
            delete localStorage[JSON.stringify(idAnime)];
            setIsFavorite(false);
            setFavoritesAnime(Object.values(localStorage).map((item) => JSON.parse(item)));
            return;
        }

        localStorage.setItem(
            JSON.stringify(_id),
            JSON.stringify({_id, title, image, ranking, episodes})
        );
    };

    const handleClickDetailedPage = (idAnime: number) => {
        navigate(`/anime-list/detailed-item/${idAnime}`);
    };

    return (
        <article className={`${styles.card} card border-primary`}>
            <button
                className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}
                type="button"
                onClick={() => handleLikeClick(_id)}
            >
                <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z"
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div className={`${styles.img_wrp}`}>
                <img className={`${styles.img}`} src={image} alt={title} />
            </div>
            <div className={`${styles.card_body}`}>
                <div className={`${styles.card_characteristics}`}>
                    <div className={`${styles.ranking}`}>
                        <svg
                            className={`${styles.ranking_star}`}
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                        >
                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <div>{ranking}</div>
                    </div>
                    <div className={`${styles.episodes}`}>{episodes} episodes</div>
                </div>
                <h2 className={`${styles.title}`}>{title}</h2>
            </div>
            <button
                type="button"
                className="card__btn btn btn-primary"
                onClick={() => handleClickDetailedPage(_id)}
            >
                View more
            </button>
        </article>
    );
}

Card.propTypes = {
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ranking: PropTypes.number.isRequired,
    episodes: PropTypes.number.isRequired,
};

export {Card};
