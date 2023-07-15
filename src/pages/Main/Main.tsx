import {CardList} from '../../components/CardList/CardList';
import {EntryText} from '../../components/EntryText/EntryText';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {useDataFetching} from '../../hooks';
import {AnimeInfo} from '../../types/state';
import styles from './Main.module.css';

function Main() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fetchedAnimes: any = useDataFetching(
        'https://anime-db.p.rapidapi.com/anime?page=1&size=20&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc',
        'main'
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const animeDataBase: AnimeInfo[] = fetchedAnimes?.map((item: any) => {
        const {_id, ...rest} = item;
        return {...rest, id: _id};
    });

    let topRatedAnimes = null;
    if (animeDataBase) {
        const sortedAnime = [...animeDataBase].sort((a, b) => b.ranking - a.ranking);
        topRatedAnimes = sortedAnime.slice(0, 6);
    }

    return (
        <div className={styles.container}>
            <EntryText />
            <SearchBar data={animeDataBase} />
            <div className={styles.card_container}>
                {animeDataBase && <CardList cards={topRatedAnimes} />}
            </div>
        </div>
    );
}

export {Main};
