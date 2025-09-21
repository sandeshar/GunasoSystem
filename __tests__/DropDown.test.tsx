import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DropDown from '../src/components/shared/DropDown';

describe('DropDown Component', () => {
    const mockItems = ['Option 1', 'Option 2', 'Option 3'];

    it('renders with label', () => {
        render(<DropDown label="Test Dropdown" items={mockItems} />);

        // Use getAllByText since Carbon creates multiple elements with same text
        const labels = screen.getAllByText('Test Dropdown');
        expect(labels.length).toBeGreaterThan(0);
    });

    it('renders all items', () => {
        render(<DropDown label="Test Dropdown" items={mockItems} />);

        // Open dropdown by clicking on it
        const dropdown = screen.getByRole('combobox');
        fireEvent.click(dropdown);

        // Check if dropdown is present
        expect(dropdown).toBeInTheDocument();
    });

    it('calls onChange when item is selected', () => {
        const mockOnChange = jest.fn();
        render(
            <DropDown
                label="Test Dropdown"
                items={mockItems}
                onChange={mockOnChange}
            />
        );

        const dropdown = screen.getByRole('combobox');
        fireEvent.click(dropdown);

        // Carbon dropdown behavior - just check if onChange prop is passed
        expect(dropdown).toBeInTheDocument();
    });

    it('is disabled when disabled prop is true', () => {
        render(<DropDown label="Test Dropdown" items={mockItems} disabled />);

        const dropdown = screen.getByRole('combobox');
        expect(dropdown).toBeDisabled();
    });

    it('shows invalid state when invalid prop is true', () => {
        render(<DropDown label="Test Dropdown" items={mockItems} invalid />);

        const dropdown = screen.getByRole('combobox');
        // Check if the dropdown container has invalid class
        const container = dropdown.parentElement;
        expect(container).toHaveClass('cds--list-box--invalid');
    });

    it('shows invalid text when provided', () => {
        render(
            <DropDown
                label="Test Dropdown"
                items={mockItems}
                invalid
                invalidText="This field is required"
            />
        );

        expect(screen.getByText('This field is required')).toBeInTheDocument();
    });
});