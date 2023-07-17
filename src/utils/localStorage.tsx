import {User} from '../types/user';

export const localStorageUtil = {
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
};