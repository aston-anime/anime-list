import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {debounce} from 'lodash';
import PropTypes from 'prop-types';
import {applyFilter} from '../../services/applyFilter';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getUserName} from '../../store/auth/selectors';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';

import {AnimeWithId} from '../../types/animeData';

import {search} from '../../store/actions/search';
import styles from './SearchBar.module.css';

type SearchProps = {
    data: AnimeWithId[] | null;
};

function SearchBar({data}: SearchProps) {
    const [suggests, setSuggests] = useState<AnimeWithId[] | null>(null);
    const [dropdown, setDropdown] = useState(true);

    const dispatch = useAppDispatch();
    const user = useAppSelector(getUserName);

    const navigate = useNavigate();
    const location = useLocation();

    const userQuery = new URLSearchParams(location.search);
    const currentQuery = userQuery.get('query') || '';

    const [input, setInput] = useState<string>(currentQuery);

    const debouncedGenerateSuggests = debounce((userInput: string) => {
        const filteredAnime = applyFilter(userInput, data);
        setSuggests(filteredAnime);
    }, 300);

    const handleChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        setDropdown(true);
        setInput(value);
        debouncedGenerateSuggests(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDropdown(false);
        setSuggests(null);

        const query = (event.target as HTMLFormElement).search.value;
        const queryResult = applyFilter(query, data);

        dispatch(search({user, query, queryResult}));
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
            {input && dropdown && <SearchResultsList results={suggests} maxResults={5} />}
        </div>
    );
}

SearchBar.defaultProps = {
    data: null,
};

SearchBar.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            ranking: PropTypes.number.isRequired,
            episodes: PropTypes.number.isRequired,
        })
    ),
};

export {SearchBar};
