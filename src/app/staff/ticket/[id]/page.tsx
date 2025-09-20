'use client';
import StaffTopBar from "@/components/staff/StaffTopBar";
import { fetchCategories, fetchTickets, fetchWards } from "@/utils/fetchData";
import { Tile } from "@carbon/react";
import { useEffect, useState } from "react";
import AddNotesModal from "@/components/staff/AddNotesModal";
import TicketAssignmentConfirmationModal from "@/components/staff/TicketAssignmentConfirmationModal";
import NotifyCitizenModal from "@/components/staff/NotifyCitizenModal";

export default function StaffTicketDetailsPage({ params }: { params: { id: string } }) {
    const ticketId = params.id;
    const [ticket, setTicket] = useState<any | null>(null);
    const [categories, setCategories] = useState<any[]>([]);
    const [wards, setWards] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Modal states
    const [showAddNotesModal, setShowAddNotesModal] = useState<boolean>(false);
    const [showNotifyCitizenModal, setShowNotifyCitizenModal] = useState<boolean>(false);
    const [showAssignmentConfirmationModal, setShowAssignmentConfirmationModal] = useState<boolean>(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [ticketsData, categoriesData, wardsData] = await Promise.all([
                    fetchTickets(),
                    fetchCategories(),
                    fetchWards()
                ]);

                const foundTicket = ticketsData.find((ticket: any) => ticket.id === ticketId);
                setTicket(foundTicket || null);
                setCategories(categoriesData || []);
                setWards(wardsData || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [ticketId]);
    // Helper functions to get category and ward names
    const getCategoryName = (categoryId: string) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name_en : 'Unknown Category';
    };

    const getWardName = (wardId: string) => {
        const ward = wards.find(w => w.id === wardId);
        return ward ? ward.name_en : 'Unknown Ward';
    };

    const formatDate = (isoString: string) => {
        if (!isoString) return 'N/A';
        return new Date(isoString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <>
                <StaffTopBar heading="Ticket" />
                <div style={{ padding: '20px' }}>
                    <p>Loading ticket details...</p>
                </div>
            </>
        );
    }

    if (!ticket) {
        return (
            <>
                <StaffTopBar heading="Ticket" />
                <div style={{ padding: '20px' }}>
                    <p>Ticket not found.</p>
                </div>
            </>
        );
    }

    return (
        <>
            <StaffTopBar heading="Ticket" />
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
                    <Tile style={{ display: 'inline-flex', flexDirection: 'column', gap: '10px', padding: '30px' }}>
                        <p><strong>Ticket ID:</strong> {ticket.id}</p>
                        <p><strong>Title:</strong> {ticket.title_en}</p>
                        <p><strong>Category:</strong> {getCategoryName(ticket.category_id)}</p>
                        <p><strong>Ward:</strong> {getWardName(ticket.ward_id)}</p>
                        <p><strong>Status:</strong> {ticket.status}</p>
                        <p><strong>Priority:</strong> {ticket.priority}</p>
                        <p><strong>Date:</strong> {formatDate(ticket.created_at_iso)}</p>
                    </Tile>
                    <Tile style={{ display: 'inline-flex', flexDirection: 'column', gap: '10px', padding: '30px' }}>
                        <a
                            onClick={() => setShowAssignmentConfirmationModal(true)}
                            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                            Update Status
                        </a>
                        <a
                            onClick={() => setShowAssignmentConfirmationModal(true)}
                            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                            Assign to Staff
                        </a>
                        <a
                            onClick={() => setShowAddNotesModal(true)}
                            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                            Add Notes
                        </a>
                        <a
                            onClick={() => setShowNotifyCitizenModal(true)}
                            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                        >
                            Notify Citizen
                        </a>
                    </Tile>
                </div>
                <Tile>
                    <p>Issue:</p>
                    <pre>{ticket.title_en}</pre>
                </Tile>
                <Tile>
                    <p>Attachment:</p>
                    <pre>ABCD.png</pre>
                </Tile>
                <Tile>
                    <p>Comments:</p>
                    <pre>No comments available.</pre>
                </Tile>
            </div>

            {/* Modals */}
            <AddNotesModal
                open={showAddNotesModal}
                onClose={() => setShowAddNotesModal(false)}
            />

            <NotifyCitizenModal
                open={showNotifyCitizenModal}
                onClose={() => setShowNotifyCitizenModal(false)}
            />

            <TicketAssignmentConfirmationModal
                open={showAssignmentConfirmationModal}
                onClose={() => setShowAssignmentConfirmationModal(false)}
                ticketId={ticket?.id}
            />
        </>
    );
}
