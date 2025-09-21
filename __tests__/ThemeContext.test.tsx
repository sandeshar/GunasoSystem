import { render, screen, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';

// Mock localStorage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
});

// Test component to use the theme context
function TestComponent() {
    const { theme, setTheme, toggleTheme } = useTheme();

    return (
        <div>
            <div data-testid="current-theme">{theme}</div>
            <button data-testid="set-g10" onClick={() => setTheme('g10')}>
                Set G10
            </button>
            <button data-testid="set-g90" onClick={() => setTheme('g90')}>
                Set G90
            </button>
            <button data-testid="toggle-theme" onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}

describe('ThemeContext', () => {
    beforeEach(() => {
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
    });

    it('provides default theme as g10', () => {
        localStorageMock.getItem.mockReturnValue(null);

        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );

        expect(screen.getByTestId('current-theme')).toHaveTextContent('g10');
    });

    it('loads theme from localStorage', () => {
        localStorageMock.getItem.mockReturnValue('g90');

        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );

        expect(screen.getByTestId('current-theme')).toHaveTextContent('g90');
    });

    it('sets theme correctly', () => {
        localStorageMock.getItem.mockReturnValue(null);

        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );

        const setG90Button = screen.getByTestId('set-g90');

        act(() => {
            setG90Button.click();
        });

        expect(screen.getByTestId('current-theme')).toHaveTextContent('g90');
        expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'g90');
    });

    it('toggles theme from g10 to g90', () => {
        localStorageMock.getItem.mockReturnValue(null);

        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );

        const toggleButton = screen.getByTestId('toggle-theme');

        // Initial theme should be g10
        expect(screen.getByTestId('current-theme')).toHaveTextContent('g10');

        act(() => {
            toggleButton.click();
        });

        // After toggle should be g90
        expect(screen.getByTestId('current-theme')).toHaveTextContent('g90');
    });

    it('toggles theme from g90 to g10', () => {
        localStorageMock.getItem.mockReturnValue('g90');

        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );

        const toggleButton = screen.getByTestId('toggle-theme');

        // Initial theme should be g90
        expect(screen.getByTestId('current-theme')).toHaveTextContent('g90');

        act(() => {
            toggleButton.click();
        });

        // After toggle should be g10
        expect(screen.getByTestId('current-theme')).toHaveTextContent('g10');
    });

    it('saves theme to localStorage when changed', () => {
        localStorageMock.getItem.mockReturnValue(null);

        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );

        const setG90Button = screen.getByTestId('set-g90');

        act(() => {
            setG90Button.click();
        });

        expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'g90');
    });

    it('throws error when useTheme is used outside ThemeProvider', () => {
        // Suppress console.error for this test
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });

        expect(() => {
            render(<TestComponent />);
        }).toThrow('useTheme must be used within a ThemeProvider');

        consoleSpy.mockRestore();
    });

    it('renders children within CarbonTheme wrapper', () => {
        localStorageMock.getItem.mockReturnValue(null);

        render(
            <ThemeProvider>
                <div data-testid="child-content">Test Content</div>
            </ThemeProvider>
        );

        expect(screen.getByTestId('child-content')).toBeInTheDocument();
    });
});