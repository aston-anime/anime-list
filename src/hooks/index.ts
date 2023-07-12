import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {AnimeData} from '../types/state';
import type {State, AppDispatch} from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const useDataFetching = (url: string, options = {}) => {
    const [data, setData] = useState<AnimeData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                setData(json.data);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log('error', error);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return data;
};
