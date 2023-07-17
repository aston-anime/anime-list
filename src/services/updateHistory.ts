import {HistoryRecord} from '../types/HistoryRecord';
import {AnimeWithId} from '../types/state';
import {LocalStorageUtil} from '../utils/LocalStorageUtil';

/**
 * Updates the history of queries made by a logged-in user, by adding a new history record
 */

export const updateHistory = (user: string, query: string, queryResult: AnimeWithId[] | null) => {
    if (query === '') {
        return;
    }

    const currentHistory = LocalStorageUtil.getSearchHistory(user);

    const historyRecord: HistoryRecord = {
        query,
        timestamp: new Date().toLocaleString(),
        queryResultNumber: queryResult?.length || 0,
        queryResultLink: `/anime-list/search/?query=${encodeURIComponent(query)}`,
    };

    const updatedHistory = [historyRecord, ...currentHistory];
    LocalStorageUtil.setSearchHistory(user, updatedHistory);
};
