/* eslint-disable @typescript-eslint/no-explicit-any */
import {AnimeWithId} from '../types/animeData';

// Потому что localStorage.getItem возвращает string | null, а localStorage.setItem принимает только стринг
export const setFavoriteToLS = (key: string, userInfo: any, value: AnimeWithId[]) => {
    localStorage.setItem(key, JSON.stringify({...JSON.parse(userInfo), favorite: value}));
};

export const getUserInfoFromLS = (userName: string) => localStorage.getItem(`${userName}`);
