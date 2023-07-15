import {useLocation} from 'react-router-dom';
import {AnimeInfo} from '../../types/state';
import {CardList} from '../../components/CardList/CardList';
import {SearchBar, applyFilter} from '../../components/SearchBar/SearchBar';
import {useDataFetching} from '../../hooks';

import styles from './Search.module.css';

function Search() {
    const location = useLocation();
    const paramValue = new URLSearchParams(location.search).get('query');
    const fetchedAnimes = useDataFetching(
        'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_EHB_ACCESS_KEY,
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
            },
        }
    );

    const animeDataBase: AnimeInfo[] = fetchedAnimes?.map((item) => {
        const {_id, ...rest} = item;
        return {...rest, id: _id};
    });

    const filteredResults = applyFilter(paramValue, animeDataBase);

    return (
        <div className={styles.container}>
            <SearchBar data={animeDataBase} />
            <h4 className={styles.title}>
                {paramValue === null || paramValue.length === 0 || filteredResults!.length === 0
                    ? 'No matching Anime...'
                    : 'Search Results:'}
            </h4>

            <CardList cards={filteredResults} />
        </div>
    );
}

export {Search};
