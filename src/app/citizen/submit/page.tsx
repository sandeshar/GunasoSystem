'use client';
import Button from "@/components/shared/Button";
import DropDown from "@/components/shared/DropDown";
import FileUploader from "@/components/shared/FileUploader";
import Modal from "@/components/shared/Modal";
import TextArea from "@/components/shared/TextArea";
import TextInput from "@/components/shared/TextInput";
import { DatePickerInput } from "@carbon/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CitizenSubmitPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

            <DropDown label="Select Category" items={
                ['Road Issue', 'Water Supply', 'Electricity', 'Garbage Collection', 'Public Safety', 'Health Services', 'Education', 'Transportation', 'Environmental Concerns', 'Housing', 'Other']
            } />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
                <TextInput label="District" placeholder="Enter District" />
                <TextInput label="Address" placeholder="Enter Address" />
                <TextInput label="Ward No." placeholder="Enter Ward No." />
            </div>
            <DatePickerInput
                id="date-picker-single"
                labelText="Date Picker label"
                placeholder="mm/dd/yyyy"
            />
            <TextArea label="Describe Issue" placeholder="Write here..." />
            <FileUploader label="Add Images / Attachments (Optional)" />
            <div>
                <Button kind="primary" onClick={() => setModalOpen(true)}>Submit</Button>
                <Button kind="secondary" style={{ marginLeft: '8px' }}>Reset</Button>
            </div>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} onConfirm={() => { setModalOpen(false); router.push('/citizen/submit/confirmation'); }} />

        </div>
    );
}
