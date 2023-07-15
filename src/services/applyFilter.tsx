import {AnimeInfo} from '../types/state';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const applyFilter = (userInput: any, data: AnimeInfo[] | null) =>
    data?.filter(
        (anime: AnimeInfo) =>
            userInput && anime && anime.title && anime.title.toLowerCase().includes(userInput)
    ) || null;
