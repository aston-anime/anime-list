import {useLocation} from 'react-router-dom';
import {CardList} from '../../components/CardList/CardList';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {applyFilter} from '../../services/applyFilter';

import {useGetCardsQuery} from '../../api/cardsApi';
import styles from './Search.module.css';

function Search() {
    const {data} = useGetCardsQuery('');
    let filteredAnimes = null;

    const location = useLocation();
    const userQuery = new URLSearchParams(location.search).get('query');

    if (data) {
        filteredAnimes = applyFilter(userQuery, data);
    }
    const isDataLoading = !data;

    let message;
    if (isDataLoading) {
        message = 'Loading...';
    } else if (userQuery === null || userQuery.length === 0 || filteredAnimes?.length === 0) {
        message = 'No matching Anime...';
    } else {
        message = 'Search Results:';
    }

    return (
        <div className={styles.container}>
            <SearchBar data={data} />
            <h4 className={styles.title}>{message}</h4>
            <CardList cards={filteredAnimes} />
        </div>
    );
}

export {Search};
