export const LocalStorageUtil = {
    getItem: (key: string) => localStorage.getItem(key),
    setItem: (key: string, value: string) => localStorage.setItem(key, value),
    findAuthUser: () => {
        const user = Object.values(localStorage).find((item) => JSON.parse(item).auth === true);
        if (user) return JSON.parse(user).userName;
        return null;
    },
};
