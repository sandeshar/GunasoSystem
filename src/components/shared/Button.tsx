import { Button as CarbonButton } from "@carbon/react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    kind?: "primary" | "secondary" | "danger";
    disabled?: boolean;
}

export default function Button({
    children,
    onClick,
    kind = "primary",
    disabled = false
}: ButtonProps) {
    return (
        <CarbonButton
            onClick={onClick}
            kind={kind}
            disabled={disabled}
        >
            {children}
        </CarbonButton>
    );
}