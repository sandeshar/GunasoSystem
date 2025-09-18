import { Callout } from "@carbon/react";
import { useState, useEffect } from "react";

interface ToastProps {
    title: string;
    subtitle?: string;
    kind?: "error" | "info" | "success" | "warning";
    duration?: number; // in milliseconds
    onDismiss?: () => void;
}

export default function Toast({
    title,
    subtitle,
    kind = "info",
    duration = 5000, // 5 seconds default
    onDismiss
}: ToastProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                setVisible(false);
                if (onDismiss) {
                    onDismiss();
                }
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [duration, onDismiss]);

    if (!visible) {
        return null;
    }

    return (
        <Callout
            kind={kind}
            statusIconDescription="notification"
            subtitle={subtitle}
            title={title}
            style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 1000 }}
        />
    )
}
