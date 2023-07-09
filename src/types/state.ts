import {store} from '../store';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AnimeData = {
    id: number;
    title: string;
    image: string;
    ranking: number;
    episodes: number;
};
