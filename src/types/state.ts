import {store} from '../store';
import {SetFavoritesAnime} from './setFavorites';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface AnimeData {
    _id: number;
    title: string;
    image: string;
    ranking: number;
    episodes: number;
    setFavoritesAnime?: SetFavoritesAnime;
}

export interface AnimeWithId extends Omit<AnimeData, '_id'> {
    id: number;
}
