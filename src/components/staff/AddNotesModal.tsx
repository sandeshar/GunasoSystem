"use client";

import { Dialog, DialogBody, DialogCloseButton, DialogControls, DialogFooter, DialogHeader, DialogTitle } from "@carbon/react/lib/components/Dialog";
import Button from "../shared/Button";
import TextArea from "../shared/TextArea";

interface AddNotesModalProps {
    open?: boolean;
    onClose: () => void;
    title?: string;
}

export default function AddNotesModal({
    open,
    onClose,
    title = "Notes For Citizen",
}: AddNotesModalProps) {

    return (
        <Dialog
            aria-labelledby="add-notes-dialog-title"
            modal
            open={open}
            onRequestClose={onClose}
        >
            <DialogHeader>
                <DialogTitle id="add-notes-dialog-title">{title}</DialogTitle>
                <DialogControls>
                    <DialogCloseButton onClick={onClose} />
                </DialogControls>
            </DialogHeader>

            <DialogBody>
                <div style={{ marginBottom: '16px' }}>
                    <TextArea
                        label=""
                        placeholder="Write Here..."
                    />
                </div>
            </DialogBody>

            <DialogFooter>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <Button
                        kind="primary"
                        size="sm"
                        onClick={onClose}
                    >
                        Add Note
                    </Button>
                </div>
            </DialogFooter>
        </Dialog>
    );
}