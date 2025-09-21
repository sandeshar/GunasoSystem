import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from '../src/components/shared/Filter';

describe('Filter Component', () => {
    it('renders filter text', () => {
        render(<Filter />);

        expect(screen.getByText('Filter')).toBeInTheDocument();
    });

    it('has correct styling', () => {
        const { container } = render(<Filter />);
        const filterDiv = container.firstChild as HTMLElement;

        expect(filterDiv).toHaveStyle({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
        });
    });

    it('renders with FilterEdit icon', () => {
        const { container } = render(<Filter />);

        // Check if SVG icon is present
        const svgIcon = container.querySelector('svg');
        expect(svgIcon).toBeInTheDocument();
    });
});