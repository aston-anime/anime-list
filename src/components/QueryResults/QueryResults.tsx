import {Location} from 'react-router';
import {CardList} from '../CardList/CardList';

function QueryResults({location}: {location: Location}) {
    const pathSegments = location?.pathname.split('/');
    const encodedParam = pathSegments[pathSegments.length - 1];
    const decodedParam = decodeURIComponent(encodedParam);
    const paramValue = JSON.parse(decodedParam);
    if (paramValue === null || paramValue.length === 0) {
        return <div>No matching Anime...</div>;
    }
    return (
        <>
            <h2>Search Results</h2>
            <CardList cards={paramValue} />
        </>
    );
}

export {QueryResults};
