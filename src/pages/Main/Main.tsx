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
                'X-RapidAPI-Key': '9ef920492cmsh06da1f517ac850bp15fe5ajsncf451d92f610',
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
