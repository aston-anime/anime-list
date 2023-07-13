import {CardList} from '../../components/CardList/CardList';
import {EntryText} from '../../components/EntryText/EntryText';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {useDataFetching} from '../../hooks';
import {AnimeInfo} from '../../types/state';
import styles from './Main.module.css';

function Main() {
    const fetchedAnimes = useDataFetching(
        'https://anime-db.p.rapidapi.com/anime?page=1&size=15&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_EHB_ACCESS_KEY,
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
            },
        }
    );

    const animeDataBase: AnimeInfo[] = fetchedAnimes.map((item) => {
        const {_id, ...rest} = item;
        return {...rest, id: _id};
    });

    return (
        <div className={`${styles.container}`}>
            <EntryText />
            <SearchBar data={animeDataBase} />
            <div className={`${styles.card_container}`}>
                {animeDataBase && <CardList cards={animeDataBase} />}
            </div>
        </div>
    );
}

export {Main};
