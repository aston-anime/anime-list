import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {debounce} from 'lodash';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';
import {AnimeInfo} from '../../types/state';
import {AppRoute} from '../../routing/AppRoute';

import styles from './SearchBar.module.css';

type SearchProps = {
    data: AnimeInfo[] | null;
};

function SearchBar({data}: SearchProps) {
    const [input, setInput] = useState<string>('');
    const [suggests, setSuggests] = useState<AnimeInfo[] | null>(null);

    const navigate = useNavigate();

    const filterData = (userInput: string) => {
        const filteredResults = data?.filter(
            (anime: AnimeInfo) =>
                userInput && anime && anime.title && anime.title.toLowerCase().includes(userInput)
        );
        setSuggests(filteredResults || null);
    };

    const debouncedFilterFunc = debounce(filterData, 300);

    const handleChange = (value: string) => {
        setInput(value);
        debouncedFilterFunc(value);
    };

    const handleSearch = () => {
        const encodedURI = encodeURIComponent(JSON.stringify(suggests));
        navigate(`${AppRoute.Search}/${encodedURI}`, {state: {results: suggests}});
    };

    return (
        <div>
            <div className={`${styles.wrapper}`}>
                <input
                    type="text"
                    value={input}
                    className={`${styles.input}`}
                    onChange={(e) => handleChange(e.target.value)}
                    list="suggestions"
                    placeholder="Search..."
                />
                <button
                    type="submit"
                    className="btn btn-secondary my-2 my-sm-0"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            <SearchResultsList results={suggests} maxResults={5} />
        </div>
    );
}

export {SearchBar};
