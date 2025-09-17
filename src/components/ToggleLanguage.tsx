'use client';
import { useLanguageStore } from "@/utils/LanguageSwitcher";
import { Toggle } from "@carbon/react"

export const ToggleLanguage = () => {
    const { language, toggleLanguage } = useLanguageStore();
    const toggled = language === 'np';
    return <Toggle
        id="language-toggle"
        labelText="Language"
        labelA="EN"
        labelB="NP"
        toggled={toggled}
        onToggle={() => toggleLanguage()}
    />;
}