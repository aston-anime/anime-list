import {useLocation} from 'react-router-dom';
import {CardList} from '../../components/CardList/CardList';
import {Loader} from '../../components/Loader/Loader';
import {SearchBar} from '../../components/SearchBar/SearchBar';
import {useGetCardsQuery} from '../../api/cardsApi';
import styles from './Search.module.css';

function Search() {
    const location = useLocation();
    const userQuery = new URLSearchParams(location.search).get('query');
    const {data} = useGetCardsQuery({search: userQuery!});

    const renderContent = () => {
        if (!userQuery || !userQuery.length) {
            return (
                <>
                    <h4 className={styles.title}>Explore the collection:</h4>
                    {data ? <CardList cards={data} /> : <Loader />}
                </>
            );
        }

        if (data && !data.length) {
            return <h4 className={styles.title}>No matching anime...</h4>;
        }

        return (
            <>
                <h4 className={styles.title}>Search Results:</h4>
                {data ? <CardList cards={data} /> : <Loader />}
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
