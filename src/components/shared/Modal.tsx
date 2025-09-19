"use client";

import { Dialog, DialogBody, DialogCloseButton, DialogControls, DialogFooter, DialogHeader, DialogTitle } from "@carbon/react/lib/components/Dialog";
import Button from "./Button";


interface SimpleDialogProps {
    open?: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
}

export default function Modal({
    open,
    onClose,
    onConfirm,
    title = "Are You Sure?",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    confirmLabel = "Submit",
    cancelLabel = "Cancel",
}: SimpleDialogProps) {
    return (
        <Dialog
            aria-labelledby="dialog-title"
            modal
            open={open}
            // style={{ position: 'absolute', top: '20%', zIndex: 1000 }}
            onRequestClose={onClose}
        >
            <DialogHeader>
                <DialogTitle id="dialog-title">{title}</DialogTitle>
                <DialogControls>
                    <DialogCloseButton onClick={onClose} />
                </DialogControls>
            </DialogHeader>

            <DialogBody>
                <p>{description}</p>
            </DialogBody>
            <div style={{ display: 'flex', gap: '8px', padding: '8px' }}>
                <Button kind="primary" size="sm" onClick={onConfirm}>
                    {confirmLabel}
                </Button>
                <Button kind="secondary" size="sm" onClick={onClose}>
                    {cancelLabel}
                </Button></div>
        </Dialog>
    );
}
