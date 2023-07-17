import {useGetCardsQuery} from '../../api/cardsApi';
import {CardList} from '../../components/CardList/CardList';
import {EntryText} from '../../components/EntryText/EntryText';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import styles from './Main.module.css';

function Main() {
    const {data} = useGetCardsQuery('');
    const animeDataBase = data;
    let topRatedAnimes;

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
