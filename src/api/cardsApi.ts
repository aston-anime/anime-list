import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AnimeData, AnimeWithId} from '../types/animeData';
import {Meta} from '../types/meta';
import {renameIdsInData} from '../services/renameIdsInData';
import {errorHandle} from '../services/error-handle';

const BASE_URL = 'https://anime-db.p.rapidapi.com/';
const LIST_URL = 'anime';
const HEADERS = {
    'X-RapidAPI-Key': process.env.REACT_APP_EHB_ACCESS_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
};

const params = {
    page: '1',
    size: '500',
    sortBy: 'ranking',
    sortOrder: 'asc',
};

type ResponseType = {
    data: AnimeData[];
    meta: Meta;
};

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getCards: builder.query<AnimeWithId[], string | void>({
            query: (filter) => ({
                url: LIST_URL,
                method: 'GET',
                headers: HEADERS,
                params: {...params, search: filter},
            }),
            transformResponse: (response: ResponseType): AnimeWithId[] =>
                renameIdsInData(response.data),
            transformErrorResponse: errorHandle,
        }),
    }),
});

export const {useGetCardsQuery} = cardsApi;
