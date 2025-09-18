import { Dropdown } from "@carbon/react";

interface DropDownProps {
    label: string;
    items: string[];
    onChange?: (selectedItem: any) => void;
    disabled?: boolean;
    invalid?: boolean;
    invalidText?: string;
}

export default function DropDown({
    label,
    items,
    onChange,
    disabled = false,
    invalid = false,
    invalidText
}: DropDownProps) {
    return (
        <Dropdown
            id="dropdown"
            label={label}
            titleText={label}
            items={items}
            onChange={onChange}
            disabled={disabled}
            invalid={invalid}
            invalidText={invalidText}
        />
    );
}
