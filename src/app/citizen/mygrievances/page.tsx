'use client';
import Button from "@/components/shared/Button";
import { Tile } from "@carbon/react";
import { useRouter } from "next/navigation";

export default function MyGrievancesPage() {
    const router = useRouter();

    const tickets = [
        {
            id: 1,
            status: "Open",
        },
        {
            id: 2,
            status: "In Progress",
        },
        {
            id: 3,
            status: "Closed",
        },
    ];

    const handleViewDetails = (ticket: any) => {
        router.push(`/citizen/mygrievances/ticketdetails/${ticket.id}`);
    };

    return (
        <div>
            <p style={{ fontSize: '12px' }}>Ticket List</p>
            {tickets.map((ticket) => (
                <Tile key={ticket.id} style={{ marginTop: '1rem', border: '1px solid #ccc', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                    <p style={{ fontSize: '12px' }}>Ticket No. {ticket.id}</p>
                    <p style={{ fontSize: '12px' }}>Status: {ticket.status}</p>
                    <Button
                        size="sm"
                        style={{ fontSize: '8px' }}
                        onClick={() => handleViewDetails(ticket)}
                    >
                        View Details
                    </Button>
                </Tile>
            ))}
        </div>
    );
}
