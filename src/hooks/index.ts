import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {AnimeData} from '../types/state';
import type {State, AppDispatch} from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const options: any = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_EHB_ACCESS_KEY,
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
    },
};

export const useDataFetching = (url: string, pageName: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const json = await response.json();
                switch (pageName) {
                    case 'main':
                        setData(json.data);
                        break;
                    case 'datailed-page':
                        setData(json);
                        break;
                    default:
                        break;
                }
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
