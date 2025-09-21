import { renderHook, act } from '@testing-library/react';
import { useLanguageStore } from '../src/utils/LanguageSwitcher';

// Mock the persist middleware to avoid localStorage issues in tests
jest.mock('zustand/middleware', () => ({
    persist: (fn: any) => fn,
}));

describe('LanguageSwitcher', () => {
    beforeEach(() => {
        // Reset the store before each test
        useLanguageStore.setState({
            language: 'en',
            dateSystem: 'AD',
            numeralSystem: 'en',
            message: require('../public/locales/en.json'),
        });
    });

    describe('Language Toggle', () => {
        it('should toggle language from English to Nepali', () => {
            const { result } = renderHook(() => useLanguageStore());

            expect(result.current.language).toBe('en');

            act(() => {
                result.current.toggleLanguage();
            });

            expect(result.current.language).toBe('np');
        });

        it('should toggle language from Nepali to English', () => {
            const { result } = renderHook(() => useLanguageStore());

            // Start with Nepali
            act(() => {
                result.current.toggleLanguage();
            });

            expect(result.current.language).toBe('np');

            act(() => {
                result.current.toggleLanguage();
            });

            expect(result.current.language).toBe('en');
        });

        it('should update message when language changes', () => {
            const { result } = renderHook(() => useLanguageStore());

            const initialMessage = result.current.message;
            expect(initialMessage.Title).toBe('Grievances');

            act(() => {
                result.current.toggleLanguage();
            });

            expect(result.current.message.Title).toBe('उजुरीहरू');
        });
    });

    describe('Date System Toggle', () => {
        it('should toggle date system from AD to BS', () => {
            const { result } = renderHook(() => useLanguageStore());

            expect(result.current.dateSystem).toBe('AD');

            act(() => {
                result.current.toggleDateSystem();
            });

            expect(result.current.dateSystem).toBe('BS');
        });

        it('should toggle date system from BS to AD', () => {
            const { result } = renderHook(() => useLanguageStore());

            // Start with BS
            act(() => {
                result.current.toggleDateSystem();
            });

            expect(result.current.dateSystem).toBe('BS');

            act(() => {
                result.current.toggleDateSystem();
            });

            expect(result.current.dateSystem).toBe('AD');
        });
    });

    describe('Numeral System Toggle', () => {
        it('should toggle numeral system from English to Devanagari', () => {
            const { result } = renderHook(() => useLanguageStore());

            expect(result.current.numeralSystem).toBe('en');

            act(() => {
                result.current.toggleNumeralSystem();
            });

            expect(result.current.numeralSystem).toBe('np');
        });

        it('should toggle numeral system from Devanagari to English', () => {
            const { result } = renderHook(() => useLanguageStore());

            // Start with Devanagari
            act(() => {
                result.current.toggleNumeralSystem();
            });

            expect(result.current.numeralSystem).toBe('np');

            act(() => {
                result.current.toggleNumeralSystem();
            });

            expect(result.current.numeralSystem).toBe('en');
        });
    });

    describe('Date Formatting', () => {
        it('should format AD dates correctly', () => {
            const { result } = renderHook(() => useLanguageStore());
            const testDate = new Date('2024-01-15');

            const formattedDate = result.current.formatDate(testDate);
            expect(formattedDate).toContain('2024');
        });

        it('should format BS dates correctly', () => {
            const { result } = renderHook(() => useLanguageStore());
            const testDate = new Date('2024-01-15');

            act(() => {
                result.current.toggleDateSystem();
            });

            const formattedDate = result.current.formatDate(testDate);
            expect(formattedDate).toContain('2081'); // Approximate BS year
        });

        it('should convert numerals to Devanagari when numeral system is np', () => {
            const { result } = renderHook(() => useLanguageStore());
            const testDate = new Date('2024-01-15');

            act(() => {
                result.current.toggleNumeralSystem();
            });

            const formattedDate = result.current.formatDate(testDate);
            expect(formattedDate).toMatch(/[०-९]/); // Contains Devanagari numerals
        });
    });

    describe('Number Formatting', () => {
        it('should format numbers in English by default', () => {
            const { result } = renderHook(() => useLanguageStore());

            const formattedNumber = result.current.formatNumber(123);
            expect(formattedNumber).toBe('123');
        });

        it('should format numbers in Devanagari when numeral system is np', () => {
            const { result } = renderHook(() => useLanguageStore());

            act(() => {
                result.current.toggleNumeralSystem();
            });

            const formattedNumber = result.current.formatNumber(123);
            expect(formattedNumber).toBe('१२३');
        });

        it('should handle zero correctly in Devanagari', () => {
            const { result } = renderHook(() => useLanguageStore());

            act(() => {
                result.current.toggleNumeralSystem();
            });

            const formattedNumber = result.current.formatNumber(0);
            expect(formattedNumber).toBe('०');
        });
    });
});