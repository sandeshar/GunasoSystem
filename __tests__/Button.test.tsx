import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../src/components/shared/Button';

describe('Button Component', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        fireEvent.click(screen.getByText('Click me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies primary kind by default', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--primary');
    });

    it('applies secondary kind when specified', () => {
        render(<Button kind="secondary">Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--secondary');
    });

    it('applies danger kind when specified', () => {
        render(<Button kind="danger">Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--danger');
    });

    it('is disabled when disabled prop is true', () => {
        render(<Button disabled>Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });

    it('applies medium size by default', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--md');
    });

    it('applies small size when specified', () => {
        render(<Button size="sm">Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--sm');
    });

    it('applies large size when specified', () => {
        render(<Button size="lg">Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('cds--btn--lg');
    });

    it('applies custom styles when provided', () => {
        const customStyle = { backgroundColor: 'red' };
        render(<Button style={customStyle}>Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle('background-color: rgb(255, 0, 0)');
    });

    it('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} disabled>Click me</Button>);

        fireEvent.click(screen.getByText('Click me'));
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('renders as link when href is provided', () => {
        render(<Button href="/test">Click me</Button>);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/test');
    });
});