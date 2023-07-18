import {HistoryRecord} from '../types/HistoryRecord';
import {AnimeWithId} from '../types/animeData';
import {localStorageUtil} from '../utils/localStorage';

/**
 * Updates the history of queries made by a logged-in user, by adding a new history record
 */

export const updateHistory = (user: string, query: string, queryResult: AnimeWithId[] | null) => {
    if (query === '') {
        return;
    }

    const currentHistory = localStorageUtil.getSearchHistory(user);

    const historyRecord: HistoryRecord = {
        query,
        timestamp: new Date().toLocaleString(),
        queryResultNumber: queryResult?.length || 0,
        queryResultLink: `/anime-list/search/?query=${encodeURIComponent(query)}`,
    };

    const updatedHistory = [historyRecord, ...currentHistory];
    localStorageUtil.setSearchHistory(user, updatedHistory);
};
