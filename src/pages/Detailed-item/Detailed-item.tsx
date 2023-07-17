import {useNavigate, useParams} from 'react-router-dom';
import {useContext} from 'react';

import cn from 'classnames';

import {ThemeContext} from '../../services/theme/ThemeProvider';
import {useDataFetching} from '../../hooks/useDataFetching';

import {AnimeData} from '../../types/animeData';
import styles from './Detailed-item.module.css';

function DetailedItem() {
    const navigate = useNavigate();
    const {theme} = useContext(ThemeContext);

    type ThemeClassType = {
        dark: string;
        light: string;
        [key: string]: string;
    };
    const ThemeClass: ThemeClassType = {
        dark: styles.light,
        light: 'text-dark',
    };

    const params = useParams();

    const anime: AnimeData | null = useDataFetching(
        `https://anime-db.p.rapidapi.com/anime/by-id/${params.id}`
    );

    const handleClick = () => {
        navigate('/anime-list');
    };

    return (
        <div className={cn(styles.container, {'text-primary': theme === 'light'})}>
            {anime ? (
                <>
                    <h2 className={styles.title}>{anime.title}</h2>
                    <div className={styles.description}>
                        <img src={anime.image} alt="" />
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
                </>
            ) : (
                <div>LOADING...</div>
            )}

            <button type="button" className={`${styles.btn} btn btn-primary`} onClick={handleClick}>
                Go back
            </button>
        </div>
    );
}

export {DetailedItem};
