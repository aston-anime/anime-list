import {AnimeWithId} from '../types/animeData';

/**
 * Filters an array of objects of AnimeInfo type, returning an array of objects only with those titles that include user's query in input
 */

export const applyFilter = (userInput: string | null, data: AnimeWithId[] | null) => {
    if (!userInput || !data) {
        return null;
    }

    return data.filter((anime) => anime.title.toLowerCase().startsWith(userInput.toLowerCase()));
};
