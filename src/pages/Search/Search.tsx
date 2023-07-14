import {useLocation} from 'react-router-dom';
import {QueryResults} from '../../components/QueryResults/QueryResults';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {AnimeInfo} from '../../types/state';
import {useDataFetching} from '../../hooks';
import styles from './Search.module.css';

function Search() {
    const location = useLocation();

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

    return (
        <div className={styles.container}>
            <SearchBar data={animeDataBase} />
            <QueryResults location={location} />
        </div>
    );
}

export {Search};
