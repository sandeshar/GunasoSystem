'use client';
import { useTheme } from "@/contexts/ThemeContext";
import { Toggle } from "@carbon/react";

export const ToggleTheme = () => {
    const { theme, toggleTheme } = useTheme();
    const toggled = theme === "g90";

    return (
        <Toggle
            id="theme-toggle"
            labelText="Theme"
            labelA="Light"
            labelB="Dark"
            toggled={toggled}
            onToggle={toggleTheme}
        />
    );
}