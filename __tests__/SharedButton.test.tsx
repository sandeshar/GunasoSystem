import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/shared/Button';

describe('Button Component', () => {
    it('renders with children text', () => {
        render(<Button>Click me</Button>);

        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick}>Click me</Button>);

        const button = screen.getByRole('button', { name: /click me/i });
        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('renders with primary kind by default', () => {
        render(<Button>Primary Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--primary');
    });

    it('renders with secondary kind when specified', () => {
        render(<Button kind="secondary">Secondary Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--secondary');
    });

    it('renders with danger kind when specified', () => {
        render(<Button kind="danger">Danger Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--danger');
    });

    it('renders with tertiary kind when specified', () => {
        render(<Button kind="tertiary">Tertiary Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--tertiary');
    });

    it('renders with ghost kind when specified', () => {
        render(<Button kind="ghost">Ghost Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--ghost');
    });

    it('renders as disabled when disabled prop is true', () => {
        render(<Button disabled>Disabled Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('renders with medium size by default', () => {
        render(<Button>Medium Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--md');
    });

    it('renders with small size when specified', () => {
        render(<Button size="sm">Small Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--sm');
    });

    it('renders with large size when specified', () => {
        render(<Button size="lg">Large Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--lg');
    });

    it('applies custom styles when provided', () => {
        const customStyle = { backgroundColor: 'red', color: 'white' };
        render(<Button style={customStyle}>Styled Button</Button>);

        const button = screen.getByRole('button');
        expect(button).toHaveStyle('background-color: rgb(255, 0, 0)');
        expect(button).toHaveStyle('color: rgb(255, 255, 255)');
    });

    it('renders with href when provided', () => {
        render(<Button href="/test-link">Link Button</Button>);

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/test-link');
    });

    it('does not call onClick when disabled', () => {
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick} disabled>Disabled Button</Button>);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockOnClick).not.toHaveBeenCalled();
    });
});