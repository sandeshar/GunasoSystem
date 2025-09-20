"use client";

import { Dialog, DialogBody, DialogCloseButton, DialogControls, DialogFooter, DialogHeader, DialogTitle } from "@carbon/react/lib/components/Dialog";
import Button from "../shared/Button";

interface NotifyCitizenModalProps {
    open?: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
}

export default function NotifyCitizenModal({
    open,
    onClose,
    title = "You want to Notify the Citizen?",
    message,
}: NotifyCitizenModalProps) {

    return (
        <Dialog
            aria-labelledby="notify-citizen-dialog-title"
            modal
            open={open}
            onRequestClose={onClose}
        >
            <DialogHeader>
                <DialogTitle id="notify-citizen-dialog-title">{title}</DialogTitle>
                <DialogControls>
                    <DialogCloseButton onClick={onClose} />
                </DialogControls>
            </DialogHeader>

            {message && (
                <DialogBody>
                    <p>{message}</p>
                </DialogBody>
            )}

            <DialogFooter>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <Button
                        kind="primary"
                        size="sm"
                        onClick={onClose}
                    >
                        Yes
                    </Button>
                    <Button
                        kind="secondary"
                        size="sm"
                        onClick={onClose}
                    >
                        No
                    </Button>
                </div>
            </DialogFooter>
        </Dialog>
    );
}