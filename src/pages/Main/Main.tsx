import './Main.css';
import {CardList} from '../../components/CardList/CardList';
import {EntryText} from '../../components/EntryText/EntryText';
import {Search} from '../../components/Search/Search';
import {useDataFetching} from '../../hooks';

function Main() {
    const animeDataBase = useDataFetching(
        'https://anime-db.p.rapidapi.com/anime?page=1&size=5&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc',
        {
            method: 'GET',
            headers: {
                // 'X-RapidAPI-Key': '0129df3857mshfb82254c2ab1e47p19d9d5jsn8355ed23882a',
                'X-RapidAPI-Key': process.env.REACT_APP_EHB_ACCESS_KEY,
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
            },
        }
    );
    return (
        <div className="main-container">
            <EntryText />
            <Search />
            <div className="card-container">
                {animeDataBase && <CardList cards={animeDataBase} />}
            </div>
        </div>
    );
}

export {Main};
