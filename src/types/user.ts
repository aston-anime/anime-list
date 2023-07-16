import {AnimeWithId} from './animeData';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type User = {
    userName: string;
    password: string;
    favorite: AnimeWithId[];
};
