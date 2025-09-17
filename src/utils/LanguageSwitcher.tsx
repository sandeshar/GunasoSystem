'use client';
import en from "../../public/locales/en.json";
import np from "../../public/locales/np.json";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Languages = 'en' | 'np';

interface LanguageState {
    language: Languages;
    message: Record<string, string>;
    toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            language: 'en',
            message: en,
            toggleLanguage: () => set((state) => {
                const newLang = state.language === 'en' ? 'np' : 'en';
                return {
                    language: newLang,
                    message: newLang === 'en' ? en : np
                };
            })
        }),
        {
            name: 'language'
        }
    )
);