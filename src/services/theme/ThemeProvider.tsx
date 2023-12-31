import React, {createContext, useCallback, useMemo, useState} from 'react';

type ThemeProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {},
});

function ThemeProvider({children}: ThemeProps) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme]);

    const themeObject = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);

    return <ThemeContext.Provider value={themeObject}> {children}</ThemeContext.Provider>;
}

export {ThemeProvider};
