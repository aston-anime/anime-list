import {useEffect, useState} from 'react';
import {useGetCardsQuery} from '../../api/cardsApi';
import {CardList} from '../../components/CardList/CardList';
import {EntryText} from '../../components/EntryText/EntryText';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {renameIdsInData} from '../../services/renameIdsInData';
import {AnimeWithId} from '../../types/state';
import styles from './Main.module.css';

function Main() {
    const {data} = useGetCardsQuery('');
    const [animeDataBase, setAnimeDataBase] = useState<AnimeWithId[] | null>(null);
    let topRatedAnimes;

    useEffect(() => {
        if (data) {
            setAnimeDataBase(renameIdsInData(data));
        }
    }, [data]);

    if (animeDataBase) {
        const sortedAnime = [...animeDataBase].sort((a, b) => b.ranking - a.ranking);
        topRatedAnimes = sortedAnime.slice(0, 5);
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
