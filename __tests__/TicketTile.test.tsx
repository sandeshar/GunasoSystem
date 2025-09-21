import { render, screen, fireEvent } from '@testing-library/react';
import TicketTile from '../src/components/TicketTile';

describe('TicketTile Component', () => {
    const mockTicket = {
        id: 123,
        status: 'Open'
    };

    const mockOnViewDetails = jest.fn();

    beforeEach(() => {
        mockOnViewDetails.mockClear();
    });

    it('renders ticket information correctly', () => {
        render(<TicketTile ticket={mockTicket} onViewDetails={mockOnViewDetails} />);

        expect(screen.getByText('Ticket No. 123')).toBeInTheDocument();
        expect(screen.getByText('Status: Open')).toBeInTheDocument();
        expect(screen.getByText('View Details')).toBeInTheDocument();
    });

    it('calls onViewDetails when button is clicked', () => {
        render(<TicketTile ticket={mockTicket} onViewDetails={mockOnViewDetails} />);

        const viewDetailsButton = screen.getByText('View Details');
        fireEvent.click(viewDetailsButton);

        expect(mockOnViewDetails).toHaveBeenCalledTimes(1);
        expect(mockOnViewDetails).toHaveBeenCalledWith(mockTicket);
    });

    it('displays different statuses correctly', () => {
        const closedTicket = { id: 456, status: 'Closed' };

        render(<TicketTile ticket={closedTicket} onViewDetails={mockOnViewDetails} />);

        expect(screen.getByText('Ticket No. 456')).toBeInTheDocument();
        expect(screen.getByText('Status: Closed')).toBeInTheDocument();
    });

    it('renders with correct styling structure', () => {
        render(<TicketTile ticket={mockTicket} onViewDetails={mockOnViewDetails} />);

        // Check that the tile container exists
        const tile = screen.getByText('Ticket No. 123').closest('.cds--tile');
        expect(tile).toBeInTheDocument();
    });

    it('handles numeric IDs correctly', () => {
        const numericTicket = { id: 999, status: 'In Progress' };

        render(<TicketTile ticket={numericTicket} onViewDetails={mockOnViewDetails} />);

        expect(screen.getByText('Ticket No. 999')).toBeInTheDocument();
        expect(screen.getByText('Status: In Progress')).toBeInTheDocument();
    });
});