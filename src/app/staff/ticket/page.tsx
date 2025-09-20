'use client';
import StaffTopBar from "@/components/staff/StaffTopBar";
import { Tile } from "@carbon/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchTickets, fetchCategories } from "@/utils/fetchData";

export default function StaffTicketPage() {
    const [data, setData] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [ticketsData, categoriesData] = await Promise.all([
                    fetchTickets(),
                    fetchCategories()
                ]);
                setData(ticketsData);
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        loadData();
    }, []);

    // Helper function to get category name by ID
    const getCategoryName = (categoryId: string) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name_en : 'Unknown Category';
    };

    return (
        <>
            <StaffTopBar heading="Tickets" />
            <p>Ticket Queue</p>
            <div>
                {data && data.map(ticket => (
                    <Tile key={ticket.id} style={{ display: 'inline-flex', width: '100%', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p style={{ fontSize: '16px' }}>Ticket ID: {ticket.id}</p>
                        <p style={{ fontSize: '16px' }}>Category: {getCategoryName(ticket.category_id)}</p>
                        <p style={{ fontSize: '16px' }}>District: {ticket.district}</p>
                        <p style={{ fontSize: '16px' }}>Address: {ticket.address}</p>
                        <p style={{ fontSize: '16px' }}>Ward: {ticket.ward_id}</p>
                        <p style={{ fontSize: '16px' }}>Date: {new Date(ticket.created_at_iso).toLocaleDateString()}</p>
                        <p style={{ fontSize: '16px' }}>Status: {ticket.status}</p>
                        <Link href={`/staff/ticket/${ticket.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>Edit</Link>
                    </Tile>
                ))}
            </div>
        </>
    );
}