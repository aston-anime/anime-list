import React, {createContext, useMemo, useState} from 'react';

type ThemeProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {},
});

function ThemeProvider({children}: ThemeProps) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = useMemo(
        () => () => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
            console.log(theme);
        },
        [theme]
    );

    const themeObject = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);

    return <ThemeContext.Provider value={themeObject}> {children}</ThemeContext.Provider>;
}

export {ThemeProvider};
