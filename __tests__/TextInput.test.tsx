import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from '@/components/shared/TextInput';

describe('TextInput Component', () => {
    it('renders with label text', () => {
        render(<TextInput label="Test Label" />);

        expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('renders with initial value', () => {
        render(<TextInput label="Test Label" value="Initial Value" />);

        const input = screen.getByLabelText('Test Label');
        expect(input).toHaveValue('Initial Value');
    });

    it('calls onChange when value changes', () => {
        const mockOnChange = jest.fn();
        render(<TextInput label="Test Label" onChange={mockOnChange} />);

        const input = screen.getByLabelText('Test Label');
        fireEvent.change(input, { target: { value: 'New Value' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({
            target: expect.objectContaining({
                value: 'New Value'
            })
        }));
    });

    it('renders with placeholder text', () => {
        render(<TextInput label="Test Label" placeholder="Enter text here" />);

        const input = screen.getByLabelText('Test Label');
        expect(input).toHaveAttribute('placeholder', 'Enter text here');
    });

    it('is disabled when disabled prop is true', () => {
        render(<TextInput label="Test Label" disabled />);

        const input = screen.getByLabelText('Test Label');
        expect(input).toBeDisabled();
    });

    it('is not disabled by default', () => {
        render(<TextInput label="Test Label" />);

        const input = screen.getByLabelText('Test Label');
        expect(input).not.toBeDisabled();
    });

    it('shows invalid state when invalid prop is true', () => {
        render(<TextInput label="Test Label" invalid />);

        const input = screen.getByLabelText('Test Label');
        expect(input).toHaveAttribute('data-invalid', 'true');
    });

    it('shows invalid text when provided', () => {
        render(<TextInput label="Test Label" invalid invalidText="This field is required" />);

        expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('does not show invalid text when invalid is false', () => {
        render(<TextInput label="Test Label" invalidText="This field is required" />);

        expect(screen.queryByText('This field is required')).not.toBeInTheDocument();
    });

    it('has correct id attribute', () => {
        render(<TextInput label="Test Label" />);

        const input = screen.getByLabelText('Test Label');
        expect(input).toHaveAttribute('id', 'text-input');
    });

    it('updates value when controlled', () => {
        const TestComponent = () => {
            const [value, setValue] = React.useState('');
            return (
                <TextInput
                    label="Test Label"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            );
        };

        render(<TestComponent />);

        const input = screen.getByLabelText('Test Label');
        fireEvent.change(input, { target: { value: 'Updated Value' } });

        expect(input).toHaveValue('Updated Value');
    });
});