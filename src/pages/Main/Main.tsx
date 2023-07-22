import {useGetCardsQuery} from '../../api/cardsApi';
import {CardList} from '../../components/CardList/CardList';
import {EntryText} from '../../components/EntryText/EntryText';
import {Loader} from '../../components/Loader/Loader';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import styles from './Main.module.css';

const TOP_COUNT = '5';

function Main() {
    const {data} = useGetCardsQuery({size: TOP_COUNT});

    return (
        <div className={styles.container}>
            <EntryText />
            <SearchBar />
            {data ? (
                <div className={styles.card_container}>
                    {data && (
                        <>
                            <h4 className={styles.title}>Top 5 rated:</h4>
                            <CardList cards={data} />
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
