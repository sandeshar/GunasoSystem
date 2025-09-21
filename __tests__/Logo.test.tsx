import { render, screen } from '@testing-library/react';
import Logo from '@/components/shared/Logo';

describe('Logo Component', () => {
    it('renders with default citizen variant', () => {
        render(<Logo />);

        expect(screen.getByText('Gunaso Nepal')).toBeInTheDocument();
    });

    it('renders with staff variant', () => {
        render(<Logo variant="staff" />);

        expect(screen.getByText('Staff Portal')).toBeInTheDocument();
    });

    it('renders with custom text', () => {
        render(<Logo customText="Custom Logo Text" />);

        expect(screen.getByText('Custom Logo Text')).toBeInTheDocument();
    });

    it('renders as clickable link by default', () => {
        render(<Logo />);

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/citizen');
    });

    it('renders staff link for staff variant', () => {
        render(<Logo variant="staff" />);

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/staff');
    });

    it('renders with custom href', () => {
        render(<Logo href="/custom-path" />);

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/custom-path');
    });

    it('renders as non-clickable div when clickable is false', () => {
        render(<Logo clickable={false} />);

        expect(screen.queryByRole('link')).not.toBeInTheDocument();
        expect(screen.getByText('Gunaso Nepal')).toBeInTheDocument();
    });

    it('applies citizen logo class by default', () => {
        render(<Logo clickable={false} />);

        const div = screen.getByText('Gunaso Nepal');
        expect(div).toHaveClass('citizen-logo');
    });

    it('applies staff logo class for staff variant', () => {
        render(<Logo variant="staff" clickable={false} />);

        const div = screen.getByText('Staff Portal');
        expect(div).toHaveClass('staff-logo');
    });

    it('applies custom className', () => {
        render(<Logo className="custom-class" clickable={false} />);

        const div = screen.getByText('Gunaso Nepal');
        expect(div).toHaveClass('citizen-logo');
        expect(div).toHaveClass('custom-class');
    });

    it('renders link with correct styling', () => {
        render(<Logo />);

        const link = screen.getByRole('link');
        expect(link).toHaveClass('logo-link');
        expect(link).toHaveClass('citizen-logo');
        expect(link).toHaveStyle('text-decoration: none');
        expect(link).toHaveStyle('color: inherit');
    });
});