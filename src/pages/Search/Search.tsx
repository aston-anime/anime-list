import {useLocation} from 'react-router-dom';
import {applyFilter} from '../../services/applyFilter';
import {CardList} from '../../components/CardList/CardList';
import {Loader} from '../../components/Loader/Loader';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {useGetCardsQuery} from '../../api/cardsApi';
import styles from './Search.module.css';

function Search() {
    const {data} = useGetCardsQuery();
    const location = useLocation();

    const userQuery = new URLSearchParams(location.search).get('query');

    const matchingAnime = applyFilter(userQuery, data!);

    const renderContent = () => {
        if (!userQuery || !userQuery.length) {
            return (
                <>
                    <h4 className={styles.title}>Explore the collection:</h4>
                    {data ? <CardList cards={data} /> : <Loader />}
                </>
            );
        }

        if (matchingAnime && !matchingAnime?.length) {
            return <h4 className={styles.title}>No matching anime...</h4>;
        }

        return (
            <>
                <h4 className={styles.title}>Search Results:</h4>
                {matchingAnime ? <CardList cards={matchingAnime} /> : <Loader />}
            </>
        );
    };

    return (
        <div className={styles.container}>
            <SearchBar />
            {renderContent()}
        </div>
    );
}

export {Search};
