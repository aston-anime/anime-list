import React, {useState} from 'react';
import {debounce} from 'lodash';
import {AnimeData} from '../../types/state';
import styles from './SearchPanel.module.css';

type SearchPanelProps = {
    searchResults: AnimeData[] | null;
    setResults: React.Dispatch<React.SetStateAction<AnimeData[] | null>>;
};

function SearchPanel({searchResults, setResults}: SearchPanelProps) {
    const [input, setInput] = useState<string>('');

    const fetchData = (value: string) => {
        const results = searchResults?.filter(
            (anime: AnimeData) =>
                value && anime && anime.title && anime.title.toLowerCase().includes(value)
        );
        setResults(results || null);
    };

    const debouncedFetchData = debounce(fetchData, 300);

    const handleChange = (value: string) => {
        setInput(value);
        debouncedFetchData(value);
    };

    const handleSearch = () => {
        window.location.href = '/anime-list/search';
    };

    return (
        <div className={`${styles.wrapper}`}>
            <input
                type="text"
                value={input}
                className={`${styles.input}`}
                onChange={(e) => handleChange(e.target.value)}
                list="suggestions"
                placeholder="Search..."
            />
            <button type="submit" className="btn btn-secondary my-2 my-sm-0" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export {SearchPanel};
