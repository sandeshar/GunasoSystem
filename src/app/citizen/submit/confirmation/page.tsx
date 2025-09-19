import Button from "@/components/shared/Button";
import DropDown from "@/components/shared/DropDown";
import TextArea from "@/components/shared/TextArea";
import TextInput from "@/components/shared/TextInput";

export default function ConfirmationPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <TextInput label="Ticket ID" value="123456" disabled />
            <TextInput label="Submitted Date" value="04/10/2025" disabled />
            <DropDown label="Category" items={['Road Issue']} disabled />
            <TextArea label="Description" value="There is a large pothole on Main Street causing traffic issues." disabled />
            <div style={{ display: 'flex', gap: '8px' }}>
                <Button kind="primary" style={{ marginLeft: '8px' }} href="/citizen/submit">Share/Save</Button>
                <Button kind="tertiary" href="/citizen">Return Home</Button>
            </div>
        </div>
    );
}
