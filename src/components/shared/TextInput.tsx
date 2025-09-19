import { TextInput as CarbonTextInput } from "@carbon/react";

interface TextInputProps {
    label: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    invalid?: boolean;
    invalidText?: string;
    placeholder?: string;
}

export default function TextInput({
    label,
    value,
    onChange,
    disabled = false,
    invalid = false,
    invalidText,
    placeholder,
}: TextInputProps) {
    return (
        <CarbonTextInput
            id="text-input"
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