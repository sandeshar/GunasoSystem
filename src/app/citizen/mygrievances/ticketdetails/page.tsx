'use client';
import Button from "@/components/shared/Button";
import DropDown from "@/components/shared/DropDown";
import Filter from "@/components/shared/Filter";
import TextArea from "@/components/shared/TextArea";
import TextInput from "@/components/shared/TextInput";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function TicketDetailsContent() {
    const searchParams = useSearchParams();

    // Get ticket data from URL parameters
    const ticketId = searchParams.get('id') || '12345';
    const status = searchParams.get('status') || 'In Progress';
    const submittedDate = searchParams.get('submittedDate') || '2023-10-01';
    const category = searchParams.get('category') || 'Road';
    const grievance = searchParams.get('grievance') || 'Pothole on Main St.';
    const title = searchParams.get('title') || 'Grievance Details';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <TextInput label="Ticket ID" value={ticketId} disabled />
            <TextInput label="Status" value={status} disabled />
            <TextInput label="Submitted Date" value={submittedDate} disabled />
            <DropDown label="Category" items={[category]} disabled />
            <TextArea label="Grievance" value={grievance} disabled />
            <TextInput label="Add Comment" placeholder="Add your comments here" />
            <Button size="sm">Submit Comment</Button>
            <div>
                <Button kind="primary" >Share/Save Ticket</Button>
                <Button kind="tertiary" style={{ marginLeft: '8px' }}>Return Home</Button>
            </div>
        </div>
    );
}

export default function TicketDetailsPage() {
    return (
        <Suspense fallback={<div>Loading ticket details...</div>}>
            <TicketDetailsContent />
        </Suspense>
    );
}
