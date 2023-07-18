import {useLocation} from 'react-router-dom';
import {CardList} from '../../components/CardList/CardList';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {useGetCardsQuery} from '../../api/cardsApi';
import styles from './Search.module.css';

function Search() {
    const {data} = useGetCardsQuery('');
    const location = useLocation();

    const userQuery = new URLSearchParams(location.search).get('query');
    const queryResult = new URLSearchParams(location.search).get('results');
    const matchingAnime = queryResult ? JSON.parse(decodeURIComponent(queryResult)) : [];

    const isDataLoading = !data;

    let message;
    if (isDataLoading) {
        message = 'Loading...';
    } else if (userQuery === null || userQuery.length === 0 || matchingAnime.length === 0) {
        message = 'No matching Anime';
    } else {
        message = 'Search Results:';
    }

    return (
        <div className={styles.container}>
            <SearchBar data={data} />
            <h4 className={styles.title}>{message}</h4>
            <CardList cards={matchingAnime} />
        </div>
    );
}

export {Search};
