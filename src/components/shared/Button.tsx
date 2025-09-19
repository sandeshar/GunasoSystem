import { Button as CarbonButton } from "@carbon/react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    kind?: "primary" | "secondary" | "danger" | 'tertiary' | 'ghost';
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    style?: React.CSSProperties;
    href?: string;
}

export default function Button({
    children,
    onClick,
    kind = "primary",
    disabled = false,
    size = "md",
    style,
    href

}: ButtonProps) {
    return (
        <CarbonButton
            onClick={onClick}
            kind={kind}
            disabled={disabled}
            size={size}
            style={style}
            href={href}
        >
            {children}
        </CarbonButton>
    );
}