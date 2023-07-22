import React, {useState, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {debounce} from 'lodash';
import {useLazyGetCardsQuery} from '../../api/cardsApi';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getUserName} from '../../store/auth/selectors';
import {SearchResultsList} from '../SearchResultsList/SearchResultsList';

import {AnimeWithId} from '../../types/animeData';

import {search} from '../../store/actions/search';
import styles from './SearchBar.module.css';

const SUGGESTS_COUNT = '5';

function SearchBar() {
    const [suggests, setSuggests] = useState<AnimeWithId[] | null>(null);
    const [fetchData] = useLazyGetCardsQuery();

    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useAppDispatch();
    const user = useAppSelector(getUserName);

    const userQuery = new URLSearchParams(location.search);
    const currentQuery = userQuery.get('query') || '';

    const inputRef = useRef<HTMLInputElement>(null);
    const inputValue = inputRef.current?.value;
    let isSubmitInvoked = false;

    const debouncedDataFetch = debounce(async () => {
        if (isSubmitInvoked) {
            return;
        }
        const response = await fetchData({search: inputRef.current?.value, size: SUGGESTS_COUNT});
        setSuggests(response.data!);
    }, 700);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        isSubmitInvoked = true;
        setSuggests(null);

        const query = (event.target as HTMLFormElement).search.value;
        const response = await fetchData({search: inputRef.current?.value});
        const queryResult = response.data;

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
                    onChange={debouncedDataFetch}
                />
                <button type="submit" className="btn btn-secondary my-2 my-sm-0">
                    Search
                </button>
            </form>
            {inputValue && <SearchResultsList results={suggests} />}
        </div>
    );
}

export {SearchBar};
