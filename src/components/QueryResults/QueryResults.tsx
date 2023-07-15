import {Location} from 'react-router';
import {AnimeInfo} from '../../types/state';
import {CardList} from '../CardList/CardList';

type QueryResultsProps = {
    location: Location;
    data: AnimeInfo[];
};

function QueryResults({location, data}: QueryResultsProps) {
    const pathSegments = location?.pathname.split('/');
    const encodedParam = pathSegments[pathSegments.length - 1];
    // const decodedParam = decodeURIComponent(encodedParam);
    // const paramValue = JSON.parse(decodedParam);

    const paramValue = decodeURIComponent(encodedParam);

    const filteredResults = data?.filter(
        (anime: AnimeInfo) =>
            paramValue && anime && anime.title && anime.title.toLowerCase().includes(paramValue)
    );

    if (paramValue === null || paramValue.length === 0) {
        return <div>No matching Anime...</div>;
    }
    return (
        <>
            <h2>Search Results</h2>

            <CardList cards={filteredResults} />
        </>
    );
}

export {QueryResults};
