import {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import cn from 'classnames';

import {ThemeContext} from '../../services/theme/ThemeProvider';
import {useDataFetching} from '../../hooks/useDataFetching';
import {Button} from '../../components/Button/Button';
import {FavoriteSvg} from '../../components/FavoriteSvg/FavoriteSvg';
import {Loader} from '../../components/Loader/Loader';
import {addFavorite, deleteFavorite} from '../../store/favorite/favorite';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {getFavorites} from '../../store/favorite/selectors';
import {getAuthStatus} from '../../store/auth/selectors';
import {AnimeData} from '../../types/animeData';

import styles from './Detailed-item.module.css';

function DetailedItem() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    const params = useParams();

    const favorites = useAppSelector(getFavorites);
    const authStatus = useAppSelector(getAuthStatus);

    const [animeDetailed, setAnimeDetailed] = useState<AnimeData | null>(null);

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const anime = useDataFetching(`https://anime-db.p.rapidapi.com/anime/by-id/${params.id}`);

    type ThemeClassType = {
        dark: string;
        light: string;
        [key: string]: string;
    };
    const ThemeClass: ThemeClassType = {
        dark: styles.light,
        light: 'text-dark',
    };

    const backButtonHandler = () => {
        navigate('/anime-list');
    };

    const handleLikeClick = (idAnime: string | undefined) => {
        if (isFavorite) {
            dispatch(deleteFavorite(idAnime));
            setIsFavorite(false);
            return;
        }
        dispatch(
            addFavorite({
                id: animeDetailed?._id,
                title: animeDetailed?.title,
                image: animeDetailed?.image,
                ranking: animeDetailed?.ranking,
                episodes: animeDetailed?.episodes,
            })
        );
        setIsFavorite(true);
    };

    useEffect(() => {
        if (anime) {
            setAnimeDetailed(anime);
            setIsFavorite(!!favorites.find((item) => item.id === animeDetailed?._id));
        }
    }, [anime, animeDetailed?._id, favorites]);

    return (
        <div className={cn(styles.container, {'text-primary': theme === 'light'})}>
            {anime ? (
                <>
                    <h2 className={styles.title}>{anime.title}</h2>
                    <div className={styles.description}>
                        <div className={styles.imgBlock}>
                            <img src={anime.image} alt="" />
                            {authStatus ? (
                                <button
                                    className={`${styles.favoriteButton} ${
                                        isFavorite ? styles.favorite : ''
                                    }`}
                                    type="button"
                                    onClick={() => handleLikeClick(animeDetailed?._id)}
                                >
                                    <FavoriteSvg />
                                </button>
                            ) : null}
                        </div>
                        <div className={styles.info}>
                            <p className={styles.info_item}>
                                Alternative Titles:
                                <span
                                    className={ThemeClass[theme]}
                                >{` ${anime.alternativeTitles}`}</span>
                            </p>
                            <p className={styles.info_item}>
                                Type:
                                <span className={ThemeClass[theme]}>{` ${anime.type}`}</span>
                            </p>
                            <p className={styles.info_item}>
                                Episodes:
                                <span className={ThemeClass[theme]}>{` ${anime.episodes}`}</span>
                            </p>
                            <p className={styles.info_item}>
                                Status:
                                <span className={ThemeClass[theme]}>{` ${anime.status}`}</span>
                            </p>
                            <p className={styles.info_item}>
                                Genres:
                                <span className={ThemeClass[theme]}>{` ${anime.genres}`}</span>
                            </p>
                            <p className={styles.info_item}>
                                Ranking:
                                <span className={ThemeClass[theme]}>{` ${anime.ranking}`}</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles.synopsis}>
                        <div>Synopsis </div>
                        <div>
                            <span className={ThemeClass[theme]}>{` ${anime.synopsis}`}</span>
                        </div>
                    </div>
                    <Button
                        onClick={backButtonHandler}
                        variant="primary"
                        className={styles.customButton}
                    >
                        ← Back
                    </Button>
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export {DetailedItem};
