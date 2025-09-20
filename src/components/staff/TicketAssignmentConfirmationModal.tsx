"use client";

import { Dialog, DialogBody, DialogCloseButton, DialogControls, DialogFooter, DialogHeader, DialogTitle } from "@carbon/react/lib/components/Dialog";
import Button from "../shared/Button";

interface TicketAssignmentConfirmationModalProps {
    open?: boolean;
    onClose: () => void;
    ticketId?: string;
    title?: string;
}

export default function TicketAssignmentConfirmationModal({
    open,
    onClose,
    ticketId = "#0041",
    title,
}: TicketAssignmentConfirmationModalProps) {
    const confirmationMessage = `Ticket ${ticketId} has been assigned successfully.`;
    const displayTitle = title || confirmationMessage;

    return (
        <Dialog
            aria-labelledby="assignment-confirmation-dialog-title"
            modal
            open={open}
            onRequestClose={onClose}
        >
            <DialogHeader>
                <DialogTitle id="assignment-confirmation-dialog-title">{displayTitle}</DialogTitle>
                <DialogControls>
                    <DialogCloseButton onClick={onClose} />
                </DialogControls>
            </DialogHeader>

            <DialogBody>
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <p style={{ fontSize: '16px', margin: 0 }}>
                        {!title && confirmationMessage}
                    </p>
                </div>
            </DialogBody>

            <DialogFooter>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        kind="secondary"
                        size="sm"
                        onClick={onClose}
                    >
                        Back
                    </Button>
                </div>
            </DialogFooter>
        </Dialog>
    );
}