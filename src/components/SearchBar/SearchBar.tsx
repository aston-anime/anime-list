import {useState} from 'react';
import {useNavigate} from 'react-router';
import {debounce} from 'lodash';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';
import {AnimeInfo} from '../../types/state';
import {applyFilter} from '../../services/applyFilter';

import styles from './SearchBar.module.css';

type SearchProps = {
    data: AnimeInfo[] | null;
};

function SearchBar({data}: SearchProps) {
    const [input, setInput] = useState<string>('');
    const [suggests, setSuggests] = useState<AnimeInfo[] | null>(null);
    const [showResults, setShowResults] = useState(false);

    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;
        setShowResults(false);
        navigate(`/anime-list/search/?query=${query}`);
    };

    const filterData = (userInput: string) => {
        const filteredResults = applyFilter(userInput, data);
        setSuggests(filteredResults);
    };

    const debouncedFilterFunc = debounce(filterData, 300);

    const handleChange = (value: string) => {
        setInput(value);
        debouncedFilterFunc(value);
        setShowResults(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={`${styles.wrapper}`}>
                <input
                    type="search"
                    value={input}
                    className={`${styles.input}`}
                    onChange={(e) => {
                        handleChange(e.target.value);
                    }}
                    placeholder="Search..."
                    name="search"
                    autoComplete="off"
                />
                <button type="submit" className="btn btn-secondary my-2 my-sm-0">
                    search
                </button>
            </form>
            {showResults && <SearchResultsList input={input} results={suggests} maxResults={5} />}
        </div>
    );
}

export {SearchBar, applyFilter};
