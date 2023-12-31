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
    size: '50',
    sortBy: 'ranking',
    sortOrder: 'asc',
};

type ResponseType = {
    data: AnimeData[];
    meta: Meta;
};

type ExtraParams = {
    search?: string;
    size?: string;
};

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getCards: builder.query<AnimeWithId[], ExtraParams | void>({
            query: (extraParams: ExtraParams) => ({
                url: LIST_URL,
                method: 'GET',
                headers: HEADERS,
                params: {...params, ...extraParams},
            }),
            transformResponse: (response: ResponseType): AnimeWithId[] =>
                renameIdsInData(response.data),
            transformErrorResponse: errorHandle,
        }),
    }),
});

export const {useGetCardsQuery, useLazyGetCardsQuery} = cardsApi;
