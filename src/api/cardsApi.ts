import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AnimeData} from '../types/animeData';

const BASE_URL = 'https://anime-db.p.rapidapi.com/';
const LIST_URL =
    'anime?page=1&size=20&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const HEADERS = {
    'X-RapidAPI-Key': process.env.REACT_APP_EHB_ACCESS_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
};

type ResponseType = {
    data: AnimeData[];
    meta: object;
};

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getCards: builder.query({
            query: () => ({
                url: LIST_URL,
                method: 'GET',
                headers: {...HEADERS},
            }),
            transformResponse: (response: ResponseType): AnimeData[] => response.data,
        }),
    }),
});

export const {useGetCardsQuery} = cardsApi;
