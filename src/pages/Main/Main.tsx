import {CardList} from '../../components/CardList/CardList';
import {EntryText} from '../../components/EntryText/EntryText';
import {Search} from '../../components/Search/Search';

function Main() {
    const animeData = [
        {
            id: 1,
            title: 'Fullmetal Alchemist1',
            image: 'https://cdn.myanimelist.net/images/anime/1493/91571.webp',
        },
        {
            id: 2,
            title: 'Fullmetal Alchemist2',
            image: 'https://cdn.myanimelist.net/images/anime/1493/91571.webp',
        },
        {
            id: 3,
            title: 'Fullmetal Alchemist2',
            image: 'https://cdn.myanimelist.net/images/anime/1493/91571.webp',
        },
    ];

    return (
        <div style={{padding: 48}}>
            <EntryText />
            <Search />
            <CardList itemlist={animeData} />
        </div>
    );
}

export {Main};
