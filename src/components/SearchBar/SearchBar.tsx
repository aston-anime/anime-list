import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {debounce} from 'lodash';
import PropTypes from 'prop-types';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';

import {AnimeData} from '../../types/state';
import styles from './SearchBar.module.css';

type SearchProps = {
    data: AnimeData[] | null;
};

function SearchBar({data}: SearchProps) {
    const [input, setInput] = useState<string>('');
    const [suggests, setSuggests] = useState<AnimeData[] | null>(null);

    const navigate = useNavigate();

    const filterData = (userInput: string) => {
        const filteredResults = data?.filter(
            (anime: AnimeData) =>
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
        navigate(`/anime-list/search`);
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
            <SearchResultsList input={input} results={suggests} maxResults={5} />
        </div>
    );
}

SearchBar.defaultProps = {
    data: null,
};

SearchBar.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            ranking: PropTypes.number.isRequired,
            episodes: PropTypes.number.isRequired,
            setFavoritesAnime: PropTypes.func.isRequired,
        })
    ),
};

export {SearchBar};
