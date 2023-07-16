import {store} from '../store';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface AnimeData {
    _id: number;
    title: string;
    image: string;
    ranking: number;
    episodes: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFavoritesAnime: any;
    alternativeTitles: string;
    type: string;
    status: string;
    genres: string;
    synopsis: string;
}

export interface AnimeInfo extends Omit<AnimeData, '_id'> {
    id: number;
}
