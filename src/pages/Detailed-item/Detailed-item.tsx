import {useNavigate} from 'react-router-dom';

import styles from './Detailed-item.module.css';

function DetailedItem() {
    const navigate = useNavigate();

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

    const handleGoBack = () => {
        navigate('/anime-list');
    };

    return (
        <div className={styles.container}>
            <div className="container-for-button">
                <button type="button" className="btn btn-primary" onClick={handleGoBack}>
                    Назад
                </button>
            </div>

            <div className={styles.titleAnime}>{testAnime.title}</div>

            <div className={styles.allInformation}>
                <div className={styles.animeDescription}>
                    <div className={styles.imageAnime}>
                        <div>
                            <img src={testAnime.image} alt="" />
                        </div>
                    </div>

                    <div className={styles.detailedInformation}>
                        <div>
                            Alternative Titles:
                            <span className={styles.descriptionCategory}>
                                {testAnime.alternativeTitles}
                            </span>
                        </div>
                        <div>
                            Type:
                            <span className={styles.descriptionCategory}>{testAnime.type}</span>
                        </div>
                        <div>
                            Episodes:
                            <span className={styles.descriptionCategory}>{testAnime.episodes}</span>
                        </div>
                        <div>
                            Status:
                            <span className={styles.descriptionCategory}>{testAnime.status}</span>
                        </div>
                        <div>
                            Genres:
                            <span className={styles.descriptionCategory}>{testAnime.genres}</span>
                        </div>
                        <div>
                            Ranking:
                            <span className={styles.descriptionCategory}>{testAnime.ranking}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.synopsisThisAnime}>
                    <div>Synopsis </div>
                    <div>
                        <span className={styles.descriptionCategory}>{testAnime.synopsis} </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {DetailedItem};
