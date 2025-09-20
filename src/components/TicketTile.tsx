'use client';
import Button from "@/components/shared/Button";
import { Tile } from "@carbon/react";

interface TicketTileProps {
    ticket: {
        id: number;
        status: string;
    };
    onViewDetails: (ticket: any) => void;
}

export default function TicketTile({ ticket, onViewDetails }: TicketTileProps) {
    return (
        <Tile
            key={ticket.id}
            style={{
                marginTop: '1rem',
                border: '1px solid #ccc',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px'
            }}
        >
            <p style={{
                fontSize: 'clamp(12px, 2.5vw, 20px)',
                margin: 0
            }}>
                Ticket No. {ticket.id}
            </p>
            <p style={{
                fontSize: 'clamp(12px, 2.5vw, 20px)',
                margin: 0
            }}>
                Status: {ticket.status}
            </p>
            <Button
                size="sm"
                style={{ fontSize: 'clamp(10px, 2vw, 16px)' }}
                onClick={() => onViewDetails(ticket)}
            >
                View Details
            </Button>
        </Tile>
    );
}