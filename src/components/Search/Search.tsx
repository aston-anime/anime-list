import {useState} from 'react';
import {SearchPanel} from '../SearchPanel/SearchPanel';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';
import {AnimeData} from '../../types/state';

type SearchProps = {
    data: AnimeData[] | null;
};

function Search({data}: SearchProps) {
    const [results, setResults] = useState<AnimeData[] | null>(null);
    return (
        <div>
            <SearchPanel searchResults={data} setResults={setResults} />
            <SearchResultsList listedResults={results} />
        </div>
    );
}

export {Search};
