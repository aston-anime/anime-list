import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {debounce} from 'lodash';
import {applyFilter} from '../../services/applyFilter';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';
import {AnimeInfo} from '../../types/state';

import styles from './SearchBar.module.css';

type SearchProps = {
    data: AnimeInfo[] | null;
};

function SearchBar({data}: SearchProps) {
    const [input, setInput] = useState<string>('');
    const [suggests, setSuggests] = useState<AnimeInfo[] | null>(null);

    const navigate = useNavigate();

    const debouncedGenerateSuggests = debounce((userInput: string) => {
        const filteredAnime = applyFilter(userInput, data);
        setSuggests(filteredAnime);
    }, 300);

    const handleChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        setInput(value);
        debouncedGenerateSuggests(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSuggests(null);

        const query = (event.target as HTMLFormElement).search.value;
        navigate(`/anime-list/search/?query=${query}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.wrapper}>
                <input
                    type="search"
                    value={input}
                    className={styles.input}
                    placeholder="Search..."
                    name="search"
                    autoComplete="off"
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-secondary my-2 my-sm-0">
                    Search
                </button>
            </form>
            {input && <SearchResultsList input={input} results={suggests} maxResults={5} />}
        </div>
    );
}

export {SearchBar};
