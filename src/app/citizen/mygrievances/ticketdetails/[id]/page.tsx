'use client';
import Button from "@/components/shared/Button";
import DropDown from "@/components/shared/DropDown";
import TextArea from "@/components/shared/TextArea";
import TextInput from "@/components/shared/TextInput";
import { useParams } from "next/navigation";

export default function TicketDetailsPage() {
    const params = useParams();
    const ticketId = params.id as string;

    const data = {
        id: ticketId,
        status: 'Pending',
        submitted: '11/12/2025',
        category: 'Road',
        grievance: "Lorem ipsum donor"
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <TextInput label="Ticket ID" value={data.id} disabled />
            <TextInput label="Status" value={data.status} disabled />
            <TextInput label="Submitted Date" value={data.submitted} disabled />
            <DropDown label="Category" items={[data.category]} disabled />
            <TextArea label="Grievance" value={data.grievance} disabled />
            <TextInput label="Add Comment" placeholder="Add your comments here" />
            <Button size="sm">Submit Comment</Button>
            <div>
                <Button kind="primary" >Share/Save Ticket</Button>
                <Button kind="tertiary" style={{ marginLeft: '8px' }}>Return Home</Button>
            </div>
        </div>
    );
}