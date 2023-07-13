import {CardList} from '../../components/CardList/CardList';
import {EntryText} from '../../components/EntryText/EntryText';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {useDataFetching} from '../../hooks';
import styles from './Main.module.css';

function Main() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fetchedAnimes: any = useDataFetching(
        'https://anime-db.p.rapidapi.com/anime?page=1&size=5&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc',
        'main'
    );

    return (
        <div className={`${styles.container}`}>
            <EntryText />
            <SearchBar data={fetchedAnimes} />
            <div className={`${styles.card_container}`}>
                {fetchedAnimes && <CardList cards={fetchedAnimes} />}
            </div>
        </div>
    );
}

export {Main};
