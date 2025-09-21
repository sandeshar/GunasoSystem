'use client';
import en from "../../public/locales/en.json";
import np from "../../public/locales/np.json";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Languages = 'en' | 'np';
type DateSystem = 'AD' | 'BS'; // Anno Domini | Bikram Sambat
type NumeralSystem = 'en' | 'np'; // English numerals | Devanagari numerals

interface LanguageState {
    language: Languages;
    dateSystem: DateSystem;
    numeralSystem: NumeralSystem;
    message: Record<string, string>;
    toggleLanguage: () => void;
    toggleDateSystem: () => void;
    toggleNumeralSystem: () => void;
    formatDate: (date: Date) => string;
    formatNumber: (num: number) => string;
}

// Utility functions for date and numeral conversion
const englishToDevanagariNumerals: Record<string, string> = {
    '0': '०', '1': '१', '2': '२', '3': '३', '4': '४',
    '5': '५', '6': '६', '7': '७', '8': '८', '9': '९'
};

const convertToDevanagariNumerals = (str: string): string => {
    return str.replace(/[0-9]/g, (match) => englishToDevanagariNumerals[match] || match);
};

const convertADtoBS = (adDate: Date): { year: number; month: number; day: number } => {
    // This is a rough approximation for demo purposes
    const bsYear = adDate.getFullYear() + 57;
    const bsMonth = adDate.getMonth() + 1;
    const bsDay = adDate.getDate();
    return { year: bsYear, month: bsMonth, day: bsDay };
};

const nepaliMonths = [
    'बैशाख', 'जेठ', 'आषाढ', 'श्रावण', 'भाद्र', 'आश्विन',
    'कार्तिक', 'मंसिर', 'पौष', 'माघ', 'फाल्गुन', 'चैत्र'
];

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set, get) => ({
            language: 'en',
            dateSystem: 'AD',
            numeralSystem: 'en',
            message: en,
            toggleLanguage: () => set((state) => {
                const newLang = state.language === 'en' ? 'np' : 'en';
                return {
                    language: newLang,
                    message: newLang === 'en' ? en : np
                };
            }),
            toggleDateSystem: () => set((state) => ({
                dateSystem: state.dateSystem === 'AD' ? 'BS' : 'AD'
            })),
            toggleNumeralSystem: () => set((state) => ({
                numeralSystem: state.numeralSystem === 'en' ? 'np' : 'en'
            })),
            formatDate: (date: Date) => {
                const state = get();

                if (state.dateSystem === 'BS') {
                    const bs = convertADtoBS(date);
                    const monthName = nepaliMonths[bs.month - 1];
                    const formatted = `${bs.year} ${monthName} ${bs.day}`;
                    return state.numeralSystem === 'np' ? convertToDevanagariNumerals(formatted) : formatted;
                } else {
                    const formatted = date.toLocaleDateString(state.language === 'en' ? 'en-US' : 'ne-NP');
                    return state.numeralSystem === 'np' ? convertToDevanagariNumerals(formatted) : formatted;
                }
            },
            formatNumber: (num: number) => {
                const state = get();
                const numStr = num.toString();
                return state.numeralSystem === 'np' ? convertToDevanagariNumerals(numStr) : numStr;
            }
        }),
        {
            name: 'language'
        }
    )
);