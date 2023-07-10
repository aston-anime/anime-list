import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';

import cn from 'classnames';
import {ThemeContext} from '../../services/theme/ThemeProvider';
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

    const testAnime = {
        _id: '1',
        title: ' Cowboy Bebop',
        alternativeTitles: [' "カウボーイビバップ" ,', '"Cowboy Bebop" '],
        ranking: ' 41',
        genres: [' Action, ', 'Award Winning, ', 'Sci-Fi'],
        episodes: ' 26',
        hasEpisode: true,
        hasRanking: true,
        image: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
        link: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
        status: ' Finished Airing',
        synopsis:
            "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.\n\nSpike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.\n\nWhile developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.\n\n[Written by MAL Rewrite]\n",
        thumb: 'https://cdn.myanimelist.net/r/50x70/images/anime/4/19644.webp?s=7701780d5a9b45e3c371a724b05a2422',
        type: ' "TV"',
    };

    const handleClick = () => {
        navigate('/anime-list');
    };

    return (
        <div className={cn(styles.container, {'text-primary': theme === 'light'})}>
            <h2 className={styles.title}>{testAnime.title}</h2>
            <div className={styles.description}>
                <img src={testAnime.image} alt="" />
                <div className={styles.info}>
                    <p className={styles.info_item}>
                        Alternative Titles:
                        <span className={ThemeClass[theme] as string}>
                            {testAnime.alternativeTitles}
                        </span>
                    </p>
                    <p className={styles.info_item}>
                        Type:
                        <span className={ThemeClass[theme] as string}>{testAnime.type}</span>
                    </p>
                    <p className={styles.info_item}>
                        Episodes:
                        <span className={ThemeClass[theme] as string}>{testAnime.episodes}</span>
                    </p>
                    <p className={styles.info_item}>
                        Status:
                        <span className={ThemeClass[theme] as string}>{testAnime.status}</span>
                    </p>
                    <p className={styles.info_item}>
                        Genres:
                        <span className={ThemeClass[theme] as string}>{testAnime.genres}</span>
                    </p>
                    <p className={styles.info_item}>
                        Ranking:
                        <span className={ThemeClass[theme] as string}>{testAnime.ranking}</span>
                    </p>
                </div>
            </div>
            <div className={styles.synopsis}>
                <div>Synopsis </div>
                <div>
                    <span className={ThemeClass[theme] as string}>{testAnime.synopsis} </span>
                </div>
            </div>
            <button type="button" className={`${styles.btn} btn btn-primary`} onClick={handleClick}>
                Назад
            </button>
        </div>
    );
}

export {DetailedItem};
