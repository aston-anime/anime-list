import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {CardList} from '../../components/CardList/CardList';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {applyFilter} from '../../services/applyFilter';
import {renameIdsInData} from '../../services/renameIdsInData';

import {useGetCardsQuery} from '../../api/cardsApi';
import {AnimeWithId} from '../../types/state';
import styles from './Search.module.css';

function Search() {
    const {data} = useGetCardsQuery('');
    const [animeDataBase, setAnimeDataBase] = useState<AnimeWithId[] | null>(null);

    useEffect(() => {
        if (data) {
            setAnimeDataBase(renameIdsInData(data));
        }
    }, [data]);

    const location = useLocation();
    const userQuery = new URLSearchParams(location.search).get('query');

    const filteredAnimes = applyFilter(userQuery, animeDataBase);
    const isDataLoading = !animeDataBase;

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
            <SearchBar data={animeDataBase} />
            <h4 className={styles.title}>{message}</h4>
            <CardList cards={filteredAnimes} />
        </div>
    );
}

export {Search};
