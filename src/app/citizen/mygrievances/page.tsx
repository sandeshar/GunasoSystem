'use client';
import TicketTile from "@/components/TicketTile";
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
                <TicketTile
                    key={ticket.id}
                    ticket={ticket}
                    onViewDetails={handleViewDetails}
                />
            ))}
        </div>
    );
}
