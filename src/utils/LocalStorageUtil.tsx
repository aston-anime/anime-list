import {User} from '../types/user';
import {HistoryRecord} from '../types/HistoryRecord';

export const LocalStorageUtil = {
    getUser: (key: string): User | null => {
        const item = localStorage.getItem(key);
        if (item) return JSON.parse(item);
        return null;
    },
    setItem: (key: string, value: object): void => {
        const item = JSON.stringify(value);
        localStorage.setItem(key, item);
    },
    setAuth: (name: string): void => localStorage.setItem('auth', name),
    getAuth: (): string | null => localStorage.getItem('auth'),

    setSearchHistory: (user: string, history: HistoryRecord[]): void => {
        LocalStorageUtil.setItem(`searchHistory_${user}`, history);
    },
    getSearchHistory: (user: string): HistoryRecord[] => {
        const historyString = localStorage.getItem(`searchHistory_${user}`);
        return historyString ? JSON.parse(historyString) : [];
    },
};
