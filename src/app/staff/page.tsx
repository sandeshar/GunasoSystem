'use client'
import TicketTile from "@/components/TicketTile";
import Button from "@/components/shared/Button";
import StaffTopBar from "@/components/staff/StaffTopBar";
import { Tile } from "@carbon/react";
import { useEffect, useState } from "react";

export default function Staff() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/api/tickets')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const status = { '800': 'Open Tickets', '600': 'Resolved', '194': 'Pending', '6': 'Escalated' };

    const ticket = [{
        id: 1,
        status: "Open",
    }, {
        id: 2,
        status: "In Progress",
    }, {
        id: 3,
        status: "Closed",
    }, {
        id: 4,
        status: "Rejected",
    }];
    return (
        <>
            <StaffTopBar heading="Dashboard" />
            <div className="staff-dashboard-content">
                <div className="staff-stats-grid">
                    {Object.entries(status).reverse().map(([key, value]) => (
                        <Tile
                            className="staff-stat-tile"
                            key={key}
                        >
                            <h1>+{key}</h1>
                            <h2>{value}</h2>
                        </Tile>
                    ))}
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                        marginBottom: '1rem'
                    }}>Recent Tickets</h2>

                </div>
                <div className="staff-recent-tickets-grid">
                    {ticket.map(ticket => (
                        <TicketTile
                            key={ticket.id}
                            ticket={ticket}
                            onViewDetails={() => { }}
                        />
                    ))}
                </div>
                <Button onClick={() => { }}>View All Tickets</Button>
            </div >
        </>
    )
}
