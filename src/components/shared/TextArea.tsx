import { TextArea as MultiText } from "@carbon/react";

interface TextareaProps {
    label: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabled?: boolean;
    invalid?: boolean;
    invalidText?: string;
    placeholder?: string;
}

export default function TextArea({
    label,
    value,
    onChange,
    disabled = false,
    invalid = false,
    invalidText,
    placeholder,
}: TextareaProps) {
    return (
        <MultiText
            id="textarea"
            labelText={label}
            value={value}
            onChange={onChange}
            disabled={disabled}
            invalid={invalid}
            invalidText={invalidText}
            placeholder={placeholder}
        />
    );
}
