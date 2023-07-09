import {useState, useEffect} from 'react';
// import {Card} from '../../components/Card/Card';
import {CardList} from '../../components/CardList/CardList';
import {EntryText} from '../../components/EntryText/EntryText';
import {Search} from '../../components/Search/Search';
// import {AnimeData} from '../../types/state';
import './Main.css';

// Ниже функция, которая просто фетчит data. И результат я хочу передать в CardList, json даже в консоли не отображается

// const useDataFetching = (url: string, options = {}) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url, options);
//                 const json = await response.json();

//                 setData(json);
//             } catch (error) {
//                 console.log('error', error);
//             }
//         };

//         fetchData();
//     }, [url, options]);
//     console.log(data);
//     return data;
// };

function Main() {
    // Пока не работает useDataFetching, использую вот эти статические данные:
    const animeDataBase = [
        {
            id: 1,
            title: 'Fullmetal Alchemist1',
            image: 'https://cdn.myanimelist.net/images/anime/1493/91571.webp',
            ranking: 5,
            episodes: 20,
        },
        {
            id: 2,
            title: 'Fullmetal Alchemist Fullmetal Alchemist',
            image: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
            ranking: 5,
            episodes: 35,
        },
        {
            id: 3,
            title: 'Fullmetal Alchemist2',
            image: 'https://cdn.myanimelist.net/images/anime/1493/91571.webp',
            ranking: 5,
            episodes: 12,
        },
        {
            id: 4,
            title: 'Fullmetal Alchemist2',
            image: 'https://cdn.myanimelist.net/images/anime/1493/91571.webp',
            ranking: 5,
            episodes: 12,
        },
        {
            id: 4,
            title: 'Fullmetal Alchemist2',
            image: 'https://cdn.myanimelist.net/images/anime/1493/91571.webp',
            ranking: 5,
            episodes: 12,
        },
    ];

    //Сохраняю в переменную данные, полученные через useDataFetching. Чтобы потом их передать CardList
    // const animeDataBase = useDataFetching('https://anime-db.p.rapidapi.com/anime/by-id/1', {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '993c316deemshdefa85edbec1549p158b1cjsn9c98bb57a235',
    //         'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
    //     },
    // });

    return (
        <div className="main-container">
            <EntryText />
            <Search />
            <div className="card-container">
                <CardList cards={animeDataBase} />
            </div>
        </div>
    );
}

export {Main};
