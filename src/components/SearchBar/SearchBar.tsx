import React, {useState, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {debounce} from 'lodash';
import {useGetCardsQuery} from '../../api/cardsApi';
import {applyFilter} from '../../services/applyFilter';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getUserName} from '../../store/auth/selectors';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';

import {AnimeWithId} from '../../types/animeData';

import {search} from '../../store/actions/search';
import styles from './SearchBar.module.css';

function SearchBar() {
    const [suggests, setSuggests] = useState<AnimeWithId[] | null>(null);
    const [dropdown, setDropdown] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const inputRef = useRef<HTMLInputElement>(null);
    const inputValue = inputRef.current?.value;
    const {data} = useGetCardsQuery(inputValue);

    const dispatch = useAppDispatch();
    const user = useAppSelector(getUserName);

    const userQuery = new URLSearchParams(location.search);
    const currentQuery = userQuery.get('query') || '';

    const handleChange = () => {
        setDropdown(true);
        setSuggests(data!);
    };

    const debouncedHandleChange = debounce(handleChange, 300);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDropdown(false);
        setSuggests(null);

        const query = (event.target as HTMLFormElement).search.value;
        const queryResult = applyFilter(query, data!);

        dispatch(search({user, query, queryResult}));
        navigate(`/anime-list/search/?query=${query}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.wrapper}>
                <input
                    type="search"
                    ref={inputRef}
                    className={styles.input}
                    defaultValue={currentQuery}
                    placeholder="Search..."
                    name="search"
                    autoComplete="off"
                    onChange={debouncedHandleChange}
                />
                <button type="submit" className="btn btn-secondary my-2 my-sm-0">
                    Search
                </button>
            </form>
            {inputValue && dropdown && <SearchResultsList results={suggests} maxResults={5} />}
        </div>
    );
}

SearchBar.defaultProps = {
    data: null,
};

export {SearchBar};
