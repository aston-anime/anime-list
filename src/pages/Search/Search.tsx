import {useLocation} from 'react-router-dom';
import {AnimeInfo} from '../../types/state';
import {CardList} from '../../components/CardList/CardList';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {applyFilter} from '../../services/applyFilter';
import {useDataFetching} from '../../hooks';

import styles from './Search.module.css';

function Search() {
    const location = useLocation();
    const userQuery = new URLSearchParams(location.search).get('query');
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

    const filteredAnimes = applyFilter(userQuery, animeDataBase);
    const isDataLoading = !animeDataBase;

    let message;
    if (isDataLoading) {
        message = 'Loading...';
    } else if (userQuery === null || filteredAnimes?.length === 0) {
        message = 'No matching Anime...';
    } else {
        message = 'Search Results:';
    }

    return (
        <div className={styles.container}>
            <SearchBar data={animeDataBase} />
            <h4 className={styles.title}>{message}</h4>
            <CardList cards={filteredAnimes} />
        </div>
    );
}

export {Search};
