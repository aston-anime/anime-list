import {AnimeWithId} from '../types/animeData';

export const applyFilter = (
    userInput: string | null,
    data: AnimeWithId[] | null
): AnimeWithId[] | null => {
    if (!userInput || !data) {
        return null;
    }

    return data.filter((anime) => anime.title.toLowerCase().includes(userInput.toLowerCase()));
};
