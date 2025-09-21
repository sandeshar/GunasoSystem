import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleLanguage } from '../src/components/ToggleLanguage';
import { useLanguageStore } from '../src/utils/LanguageSwitcher';

// Mock the language store
jest.mock('../src/utils/LanguageSwitcher');

const mockUseLanguageStore = useLanguageStore as jest.MockedFunction<typeof useLanguageStore>;

describe('ToggleLanguage Component', () => {
    const mockToggleLanguage = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        mockUseLanguageStore.mockReturnValue({
            language: 'en',
            dateSystem: 'AD',
            numeralSystem: 'en',
            message: {},
            toggleLanguage: mockToggleLanguage,
            toggleDateSystem: jest.fn(),
            toggleNumeralSystem: jest.fn(),
            formatDate: jest.fn(),
            formatNumber: jest.fn(),
        });
    });

    it('renders with correct labels', () => {
        render(<ToggleLanguage />);

        expect(screen.getByText('Language')).toBeInTheDocument();
        expect(screen.getByText('EN')).toBeInTheDocument();
        // Note: Carbon Toggle only shows one label at a time
    });

    it('shows EN as active when language is en', () => {
        render(<ToggleLanguage />);

        const toggle = screen.getByRole('switch');
        expect(toggle).not.toBeChecked();
    });

    it('shows NP as active when language is np', () => {
        mockUseLanguageStore.mockReturnValue({
            language: 'np',
            dateSystem: 'AD',
            numeralSystem: 'en',
            message: {},
            toggleLanguage: mockToggleLanguage,
            toggleDateSystem: jest.fn(),
            toggleNumeralSystem: jest.fn(),
            formatDate: jest.fn(),
            formatNumber: jest.fn(),
        });

        render(<ToggleLanguage />);

        const toggle = screen.getByRole('switch');
        expect(toggle).toBeChecked();
    });

    it('calls toggleLanguage when clicked', () => {
        render(<ToggleLanguage />);

        const toggle = screen.getByRole('switch');
        fireEvent.click(toggle);

        expect(mockToggleLanguage).toHaveBeenCalledTimes(1);
    });

    it('has correct id attribute', () => {
        render(<ToggleLanguage />);

        const toggle = screen.getByRole('switch');
        expect(toggle).toHaveAttribute('id', 'language-toggle');
    });
});