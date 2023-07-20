import {useGetCardsQuery} from '../../api/cardsApi';
import {CardList} from '../../components/CardList/CardList';
import {EntryText} from '../../components/EntryText/EntryText';
import {Loader} from '../../components/Loader/Loader';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import styles from './Main.module.css';

function Main() {
    const {data} = useGetCardsQuery();
    let topRatedAnime;

    if (data) {
        const sortedAnime = [...data].sort((a, b) => b.ranking - a.ranking);
        topRatedAnime = sortedAnime.slice(0, 5);
    }

    return (
        <div className={styles.container}>
            <EntryText />
            <SearchBar data={data} />
            {data ? (
                <div className={styles.card_container}>
                    {data && (
                        <>
                            <h4 className={styles.title}>Top 5 rated:</h4>
                            <CardList cards={topRatedAnime} />
                        </>
                    )}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export {Main};
