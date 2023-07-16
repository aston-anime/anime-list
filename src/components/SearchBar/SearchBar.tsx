import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {debounce} from 'lodash';
import PropTypes from 'prop-types';
import {applyFilter} from '../../services/applyFilter';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';

import {AnimeWithId} from '../../types/state';
import {HistoryRecord} from '../../types/HistoryRecord';

import styles from './SearchBar.module.css';

type SearchProps = {
    data: AnimeWithId[] | null;
};

function SearchBar({data}: SearchProps) {
    const [input, setInput] = useState<string>('');
    const [suggests, setSuggests] = useState<AnimeWithId[] | null>(null);
    const [searchHistory, setSearchHistory] = useState<HistoryRecord[]>([]);

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

        // const updatedHistory = [query, ...searchHistory];
        // setSearchHistory(updatedHistory);
        // localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));

        // navigate(`/anime-list/search/?query=${query}`);

        // ------
        const filteredItems = applyFilter(query, data);
        const filteredItemCount = filteredItems?.length;
        // const resultLink = `/anime-list/search/?query=${encodeURIComponent(query)}`;

        // const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
        // const updatedHistory = [
        //     {query, timestamp: new Date().toLocaleString(), filteredItemCount, resultLink},
        //     ...searchHistory,
        // ];
        // localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));

        const historyItem: HistoryRecord = {
            query,
            timestamp: new Date().toLocaleString(),
            filteredItemCount: filteredItemCount || 0,
            resultLink: `/anime-list/search/?query=${encodeURIComponent(query)}`,
        };

        const updatedHistory = [historyItem, ...searchHistory];
        setSearchHistory(updatedHistory);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));

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

SearchBar.defaultProps = {
    data: null,
};

SearchBar.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            ranking: PropTypes.number.isRequired,
            episodes: PropTypes.number.isRequired,
            setFavoritesAnime: PropTypes.func.isRequired,
        })
    ),
};

export {SearchBar};
