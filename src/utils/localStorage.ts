import {User} from '../types/user';
import {HistoryRecord} from '../types/HistoryRecord';

export const localStorageUtil = {
    getUser: (key: string): User | null => {
        const user = localStorage.getItem(key);
        if (user) return JSON.parse(user);
        return null;
    },
    setItem: (key: string, value: object): void => {
        const item = JSON.stringify(value);
        localStorage.setItem(key, item);
    },
    setAuth: (name: string): void => localStorage.setItem('auth', name),
    getAuth: (): string | null => localStorage.getItem('auth'),
    clearLocalStorage: (): void => {
        const isFirstRun = localStorage.getItem('firstRun');
        if (!isFirstRun) {
            localStorage.clear();
            localStorage.setItem('firstRun', 'true');
        }
    },
    setSearchHistory: (user: string, history: HistoryRecord[]): void => {
        localStorageUtil.setItem(`searchHistory_${user}`, history);
    },
    getSearchHistory: (user: string): HistoryRecord[] => {
        const historyString = localStorage.getItem(`searchHistory_${user}`);
        return historyString ? JSON.parse(historyString) : [];
    },
};
