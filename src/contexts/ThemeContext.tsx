'use client';
import { Theme as CarbonTheme } from "@carbon/react";
import { createContext, useContext, useEffect, useState } from "react";

type Themes = 'g10' | 'g90';

interface ThemeContextType {
    theme: Themes;
    setTheme: (theme: Themes) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Themes>('g10');

    useEffect(() => {
        localStorage.getItem('theme') === 'g90' ? setTheme('g90') : setTheme('g10');
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'g10' ? 'g90' : 'g10');
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <CarbonTheme theme={theme}>
                {children}
            </CarbonTheme>
        </ThemeContext.Provider>
    );
}
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}