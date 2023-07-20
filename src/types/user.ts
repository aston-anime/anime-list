import {AnimeWithId} from './animeData';

export type User = {
    userName: string;
    password: string;
    favorites: AnimeWithId[];
};
