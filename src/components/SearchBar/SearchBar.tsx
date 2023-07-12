import {useState} from 'react';
import {SearchInput} from '../SearchInput/SearchInput';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';
import {AnimeData} from '../../types/state';

type SearchProps = {
    data: AnimeData[] | null;
};

function SearchBar({data}: SearchProps) {
    const [results, setResults] = useState<AnimeData[] | null>(null);
    return (
        <div>
            <SearchInput searchResults={data} setResults={setResults} />
            <SearchResultsList listedResults={results} />
        </div>
    );
}

export {SearchBar};
